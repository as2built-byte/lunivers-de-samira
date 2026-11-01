import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  serverTimestamp,
  DocumentData,
  QueryConstraint,
} from 'firebase/firestore'
import { db } from './config'

// ============================================
// PRODUITS
// ============================================

export interface Product {
  id?: string
  name: string
  slug: string
  description: string
  price: number
  comparePrice?: number
  images: string[]
  categoryId: string
  stock: number
  published: boolean
  featured: boolean
  createdAt?: Date
  updatedAt?: Date
}

export async function getProducts(options?: {
  categoryId?: string
  featured?: boolean
  limit?: number
  lastDoc?: DocumentData
}) {
  const constraints: QueryConstraint[] = [
    where('published', '==', true),
    orderBy('createdAt', 'desc'),
  ]

  if (options?.categoryId) {
    constraints.push(where('categoryId', '==', options.categoryId))
  }

  if (options?.featured) {
    constraints.push(where('featured', '==', true))
  }

  if (options?.limit) {
    constraints.push(limit(options.limit))
  }

  if (options?.lastDoc) {
    constraints.push(startAfter(options.lastDoc))
  }

  const q = query(collection(db, 'products'), ...constraints)
  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[]
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const q = query(collection(db, 'products'), where('slug', '==', slug))
  const snapshot = await getDocs(q)

  if (snapshot.empty) return null

  const doc = snapshot.docs[0]
  return { id: doc.id, ...doc.data() } as Product
}

export async function createProduct(product: Omit<Product, 'id'>) {
  return addDoc(collection(db, 'products'), {
    ...product,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

// ============================================
// CATÉGORIES
// ============================================

export interface Category {
  id?: string
  name: string
  slug: string
  description?: string
  image?: string
  parentId?: string
}

export async function getCategories() {
  const snapshot = await getDocs(collection(db, 'categories'))
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Category[]
}

// ============================================
// COURS
// ============================================

export interface Course {
  id?: string
  title: string
  slug: string
  description: string
  thumbnail?: string
  price: number
  published: boolean
  featured: boolean
  level: 'beginner' | 'intermediate' | 'advanced'
  duration?: number // en minutes
  chaptersCount?: number
  lessonsCount?: number
  createdAt?: Date
  updatedAt?: Date
}

export interface Chapter {
  id?: string
  courseId: string
  title: string
  position: number
}

export interface Lesson {
  id?: string
  chapterId: string
  title: string
  description?: string
  videoUrl?: string
  duration?: number // en secondes
  position: number
  isFree: boolean
  type: 'video' | 'text' | 'quiz'
  content?: string
}

export async function getCourses(options?: {
  level?: string
  featured?: boolean
  limit?: number
}) {
  const constraints: QueryConstraint[] = [
    where('published', '==', true),
    orderBy('createdAt', 'desc'),
  ]

  if (options?.level) {
    constraints.push(where('level', '==', options.level))
  }

  if (options?.featured) {
    constraints.push(where('featured', '==', true))
  }

  if (options?.limit) {
    constraints.push(limit(options.limit))
  }

  const q = query(collection(db, 'courses'), ...constraints)
  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Course[]
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const q = query(collection(db, 'courses'), where('slug', '==', slug))
  const snapshot = await getDocs(q)

  if (snapshot.empty) return null

  const doc = snapshot.docs[0]
  return { id: doc.id, ...doc.data() } as Course
}

export async function getCourseChapters(courseId: string) {
  const q = query(
    collection(db, 'chapters'),
    where('courseId', '==', courseId),
    orderBy('position')
  )
  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Chapter[]
}

export async function getChapterLessons(chapterId: string) {
  const q = query(
    collection(db, 'lessons'),
    where('chapterId', '==', chapterId),
    orderBy('position')
  )
  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Lesson[]
}

// ============================================
// COMMANDES
// ============================================

export interface Order {
  id?: string
  userId: string
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  total: number
  items: OrderItem[]
  shippingAddress?: {
    name: string
    address: string
    city: string
    postalCode: string
    country: string
  }
  stripePaymentId?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface OrderItem {
  productId: string
  name: string
  price: number
  quantity: number
  image: string
}

export async function createOrder(order: Omit<Order, 'id'>) {
  return addDoc(collection(db, 'orders'), {
    ...order,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export async function getUserOrders(userId: string) {
  const q = query(
    collection(db, 'orders'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  )
  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Order[]
}

// ============================================
// INSCRIPTIONS AUX COURS
// ============================================

export interface Enrollment {
  id?: string
  userId: string
  courseId: string
  progress: number // 0-100
  completedLessons: string[]
  createdAt?: Date
  lastAccessedAt?: Date
}

export async function enrollInCourse(userId: string, courseId: string) {
  // Vérifier si déjà inscrit
  const q = query(
    collection(db, 'enrollments'),
    where('userId', '==', userId),
    where('courseId', '==', courseId)
  )
  const snapshot = await getDocs(q)

  if (!snapshot.empty) {
    return { id: snapshot.docs[0].id, alreadyEnrolled: true }
  }

  const docRef = await addDoc(collection(db, 'enrollments'), {
    userId,
    courseId,
    progress: 0,
    completedLessons: [],
    createdAt: serverTimestamp(),
    lastAccessedAt: serverTimestamp(),
  })

  return { id: docRef.id, alreadyEnrolled: false }
}

export async function getUserEnrollments(userId: string) {
  const q = query(
    collection(db, 'enrollments'),
    where('userId', '==', userId),
    orderBy('lastAccessedAt', 'desc')
  )
  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Enrollment[]
}

export async function updateLessonProgress(
  enrollmentId: string,
  lessonId: string,
  totalLessons: number
) {
  const enrollmentRef = doc(db, 'enrollments', enrollmentId)
  const enrollmentSnap = await getDoc(enrollmentRef)

  if (!enrollmentSnap.exists()) return

  const data = enrollmentSnap.data()
  const completedLessons = data.completedLessons || []

  if (!completedLessons.includes(lessonId)) {
    completedLessons.push(lessonId)
  }

  const progress = Math.round((completedLessons.length / totalLessons) * 100)

  await updateDoc(enrollmentRef, {
    completedLessons,
    progress,
    lastAccessedAt: serverTimestamp(),
  })
}

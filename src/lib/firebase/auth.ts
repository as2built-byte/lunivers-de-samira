import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  User,
} from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from './config'

// Types
export interface UserProfile {
  uid: string
  email: string
  displayName: string | null
  photoURL: string | null
  role: 'user' | 'instructor' | 'admin'
  createdAt: Date
}

// Créer un profil utilisateur dans Firestore
async function createUserProfile(user: User, additionalData?: Partial<UserProfile>) {
  const userRef = doc(db, 'users', user.uid)
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) {
    const { email, displayName, photoURL } = user
    await setDoc(userRef, {
      email,
      displayName,
      photoURL,
      role: 'user',
      createdAt: serverTimestamp(),
      ...additionalData,
    })
  }

  return userRef
}

// Inscription avec email/mot de passe
export async function signUp(email: string, password: string, displayName: string) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    // Mettre à jour le profil
    await updateProfile(user, { displayName })

    // Créer le profil Firestore
    await createUserProfile(user, { displayName })

    return { user, error: null }
  } catch (error: any) {
    return { user: null, error: error.message }
  }
}

// Connexion avec email/mot de passe
export async function signIn(email: string, password: string) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return { user, error: null }
  } catch (error: any) {
    return { user: null, error: error.message }
  }
}

// Connexion avec Google
export async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider()
    const { user } = await signInWithPopup(auth, provider)

    // Créer/mettre à jour le profil Firestore
    await createUserProfile(user)

    return { user, error: null }
  } catch (error: any) {
    return { user: null, error: error.message }
  }
}

// Déconnexion
export async function signOut() {
  try {
    await firebaseSignOut(auth)
    return { error: null }
  } catch (error: any) {
    return { error: error.message }
  }
}

// Réinitialisation du mot de passe
export async function resetPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email)
    return { error: null }
  } catch (error: any) {
    return { error: error.message }
  }
}

// Récupérer le profil utilisateur
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const userRef = doc(db, 'users', uid)
  const userSnap = await getDoc(userRef)

  if (userSnap.exists()) {
    return { uid, ...userSnap.data() } as UserProfile
  }

  return null
}

// Observer les changements d'authentification
export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback)
}

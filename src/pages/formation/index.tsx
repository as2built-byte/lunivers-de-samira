import { useState } from 'react'
import Head from 'next/head'
import { Search, Filter } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { CourseCard } from '@/components/formation/CourseCard'

// Données de démonstration
const mockCourses = [
  {
    id: '1',
    title: 'Les bases du maquillage professionnel',
    slug: 'bases-maquillage-professionnel',
    description: 'Apprenez les techniques fondamentales du maquillage avec des produits de qualité.',
    price: 49.99,
    thumbnail: '/images/course-1.jpg',
    level: 'BEGINNER' as const,
    duration: 180, // 3 heures
    lessonsCount: 12,
  },
  {
    id: '2',
    title: 'Soins de la peau avancés',
    slug: 'soins-peau-avances',
    description: 'Maîtrisez les routines de soins adaptées à chaque type de peau.',
    price: 79.99,
    thumbnail: '/images/course-2.jpg',
    level: 'INTERMEDIATE' as const,
    duration: 240,
    lessonsCount: 18,
  },
  {
    id: '3',
    title: 'Techniques de coiffure',
    slug: 'techniques-coiffure',
    description: 'Des coiffures simples aux créations sophistiquées.',
    price: 59.99,
    thumbnail: '/images/course-3.jpg',
    level: 'BEGINNER' as const,
    duration: 150,
    lessonsCount: 10,
  },
  {
    id: '4',
    title: 'Masterclass beauté complète',
    slug: 'masterclass-beaute-complete',
    description: 'La formation ultime pour devenir experte en beauté.',
    price: 149.99,
    thumbnail: '/images/course-4.jpg',
    level: 'ADVANCED' as const,
    duration: 480,
    lessonsCount: 36,
  },
]

export default function FormationPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = !selectedLevel || course.level === selectedLevel
    return matchesSearch && matchesLevel
  })

  return (
    <>
      <Head>
        <title>Formations - L'univers de Samira</title>
        <meta
          name="description"
          content="Développez vos compétences avec nos formations en ligne. Maquillage, soins, coiffure et bien plus."
        />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Formations
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apprenez à votre rythme avec nos cours en vidéo. Des formations complètes
            pour développer vos compétences en beauté et bien-être.
          </p>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Recherche */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher une formation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Filtres niveau */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedLevel(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                !selectedLevel
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setSelectedLevel('BEGINNER')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedLevel === 'BEGINNER'
                  ? 'bg-green-500 text-white'
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              Débutant
            </button>
            <button
              onClick={() => setSelectedLevel('INTERMEDIATE')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedLevel === 'INTERMEDIATE'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
              }`}
            >
              Intermédiaire
            </button>
            <button
              onClick={() => setSelectedLevel('ADVANCED')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedLevel === 'ADVANCED'
                  ? 'bg-red-500 text-white'
                  : 'bg-red-100 text-red-800 hover:bg-red-200'
              }`}
            >
              Avancé
            </button>
          </div>
        </div>

        {/* Résultats */}
        <div className="mb-4 text-gray-600">
          {filteredCourses.length} formation{filteredCourses.length > 1 ? 's' : ''} trouvée{filteredCourses.length > 1 ? 's' : ''}
        </div>

        {/* Grille de cours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucune formation ne correspond à votre recherche.
            </p>
          </div>
        )}
      </main>
    </>
  )
}

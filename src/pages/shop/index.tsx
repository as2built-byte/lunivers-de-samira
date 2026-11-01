import { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { MessageCircle, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const Header = dynamic(() => import('@/components/layout/Header').then(mod => mod.Header), { ssr: false })

// Numéro WhatsApp exact du site Framer
const WHATSAPP_NUMBER = '213779949411'

// Les 7 créations exactes du site Framer
const creations = [
  {
    id: '01',
    name: 'Bordeaux fleuri',
    description: 'Sac bordeaux orné de fleurs et d\'une chaîne argentée',
    emoji: '👜',
    gradient: 'from-[#8a1c3f] to-[#5e0f2b]',
    available: true,
  },
  {
    id: '02',
    name: 'Noir & or',
    description: 'Sac noir avec fermoir et chaîne dorés',
    emoji: '✨',
    gradient: 'from-gray-800 to-black',
    available: true,
  },
  {
    id: '03',
    name: 'Crochet brun',
    description: 'Sac au crochet, couleur brun chaleureux',
    emoji: '🧶',
    gradient: 'from-amber-700 to-amber-900',
    available: true,
  },
  {
    id: '04',
    name: 'Reflets argentés',
    description: 'Sac argenté avec fermoir élégant',
    emoji: '💎',
    gradient: 'from-gray-400 to-gray-600',
    available: true,
  },
  {
    id: '05',
    name: 'Éclats dorés',
    description: 'Sac doré brodé de fleurs',
    emoji: '🌟',
    gradient: 'from-[#c9a25b] to-amber-700',
    available: true,
  },
  {
    id: '06',
    name: 'Rouge texturé',
    description: 'Sac rouge texturé avec anse et chaîne dorées',
    emoji: '❤️',
    gradient: 'from-red-600 to-red-800',
    available: true,
  },
  {
    id: '07',
    name: 'Maille scintillante',
    description: 'Sac gris scintillant à anses métalliques',
    emoji: '✨',
    gradient: 'from-gray-500 to-gray-700',
    available: true,
  },
]

// Disable static generation
export const getServerSideProps = async () => {
  return { props: {} }
}

export default function ShopPage() {
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  return (
    <>
      <Head>
        <title>Nos Créations - L'univers de Samira</title>
        <meta
          name="description"
          content="Découvrez nos sacs faits main. Pièces uniques en cuir, crochet et tissus créées à Alger."
        />
      </Head>

      <Header />

      <main className="bg-cream-50 min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Sacs & Créations
            </h1>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              Chaque sac est une pièce unique, confectionnée à la main avec amour.
            </p>
          </div>
        </section>

        {/* Grille des créations */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {creations.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  {/* Image */}
                  <div className={`relative aspect-square bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <span className="text-7xl group-hover:scale-110 transition-transform">
                      {item.emoji}
                    </span>

                    {/* Badge disponibilité */}
                    {!item.available && (
                      <div className="absolute top-3 left-3 bg-gray-900/80 text-white text-xs px-3 py-1 rounded-full">
                        Vendu
                      </div>
                    )}

                    {/* Numéro */}
                    <div className="absolute top-3 right-3 text-secondary-500 font-semibold">
                      {item.id}
                    </div>

                    {/* Favoris */}
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.includes(item.id)
                            ? 'fill-primary-500 text-primary-500'
                            : 'text-gray-400'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Contenu */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    {item.available && (
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour, je suis intéressé(e) par le sac "${item.name}" (${item.id})`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Commander sur WhatsApp
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sur Mesure CTA - Le carnet des créations */}
        <section id="surmesure" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-secondary-500 font-semibold tracking-wider uppercase text-sm">
              Le carnet des créations
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mt-2 mb-4">
              Vous ne trouvez pas votre bonheur ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Dites-moi vos envies, vos couleurs, votre occasion.
              Je crée pour vous un sac unique qui vous ressemble.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour, je souhaite commander un sac sur mesure`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary-500 hover:bg-primary-700">
                <MessageCircle className="w-5 h-5 mr-2" />
                Créer mon sac sur mesure
              </Button>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

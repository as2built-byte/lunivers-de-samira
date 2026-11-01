import { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Filter, Grid, List } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const Header = dynamic(() => import('@/components/layout/Header').then(mod => mod.Header), { ssr: false })
const ProductCard = dynamic(() => import('@/components/shop/ProductCard').then(mod => mod.ProductCard), { ssr: false })

// Disable static generation
export const getServerSideProps = async () => {
  return { props: {} }
}

// Données de démonstration
const mockProducts = [
  {
    id: '1',
    name: 'Ensemble cosmétique premium',
    slug: 'ensemble-cosmetique-premium',
    price: 49.99,
    comparePrice: 69.99,
    image: '/images/product-1.jpg',
    rating: 4.5,
    reviewCount: 24,
  },
  {
    id: '2',
    name: 'Kit de soins naturels',
    slug: 'kit-soins-naturels',
    price: 34.99,
    image: '/images/product-2.jpg',
    rating: 4.8,
    reviewCount: 42,
  },
  {
    id: '3',
    name: 'Accessoires bien-être',
    slug: 'accessoires-bien-etre',
    price: 29.99,
    comparePrice: 39.99,
    image: '/images/product-3.jpg',
    rating: 4.2,
    reviewCount: 18,
  },
  {
    id: '4',
    name: 'Collection exclusive Samira',
    slug: 'collection-exclusive-samira',
    price: 89.99,
    image: '/images/product-4.jpg',
    rating: 5.0,
    reviewCount: 56,
  },
]

const categories = [
  { id: 'all', name: 'Tous les produits' },
  { id: 'cosmetics', name: 'Cosmétiques' },
  { id: 'wellness', name: 'Bien-être' },
  { id: 'accessories', name: 'Accessoires' },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <>
      <Head>
        <title>Boutique - L'univers de Samira</title>
        <meta
          name="description"
          content="Découvrez notre sélection de produits de qualité. Cosmétiques, bien-être et accessoires."
        />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            Notre Boutique
          </h1>
          <p className="text-gray-600 mt-2">
            {mockProducts.length} produits disponibles
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtres latéraux */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filtres
              </h2>

              {/* Catégories */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-2">Catégories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Prix */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-2">Prix</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded text-primary-500" />
                    Moins de 30€
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded text-primary-500" />
                    30€ - 50€
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded text-primary-500" />
                    Plus de 50€
                  </label>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Réinitialiser les filtres
              </Button>
            </div>
          </aside>

          {/* Grille de produits */}
          <div className="flex-1">
            {/* Barre d'outils */}
            <div className="flex items-center justify-between mb-6">
              <select className="border rounded-md px-3 py-2 text-sm">
                <option>Trier par : Popularité</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Nouveautés</option>
              </select>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400'
                  }`}
                  aria-label="Vue grille"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${
                    viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400'
                  }`}
                  aria-label="Vue liste"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Produits */}
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {mockProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2">
              <Button variant="outline" disabled>
                Précédent
              </Button>
              <Button variant="primary">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Suivant</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useCartStore, CartItem } from '@/lib/store/cart'

const Header = dynamic(() => import('@/components/layout/Header').then(mod => mod.Header), { ssr: false })

// Disable static generation for this page
export const getServerSideProps = async () => {
  return { props: {} }
}

export default function CartPage() {
  const [mounted, setMounted] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore()

  useEffect(() => {
    setMounted(true)
    setCartItems(items)
  }, [items])

  if (!mounted || cartItems.length === 0) {
    return (
      <>
        <Head>
          <title>Panier - L'univers de Samira</title>
        </Head>

        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h1 className="font-display text-2xl font-bold text-gray-900 mb-2">
              Votre panier est vide
            </h1>
            <p className="text-gray-600 mb-8">
              Découvrez nos produits et formations pour commencer vos achats.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/shop">
                <Button>Explorer la boutique</Button>
              </Link>
              <Link href="/formation">
                <Button variant="outline">Voir les formations</Button>
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Panier ({items.length}) - L'univers de Samira</title>
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-8">
          Votre panier
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Liste des articles */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-4 p-4 ${
                    index !== cartItems.length - 1 ? 'border-b' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>

                  {/* Détails */}
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-primary-600 font-bold">{item.price.toFixed(2)} €</p>
                  </div>

                  {/* Quantité */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded border hover:bg-gray-100"
                      aria-label="Diminuer la quantité"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded border hover:bg-gray-100"
                      aria-label="Augmenter la quantité"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Sous-total */}
                  <div className="w-24 text-right">
                    <p className="font-bold">{(item.price * item.quantity).toFixed(2)} €</p>
                  </div>

                  {/* Supprimer */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded"
                    aria-label="Supprimer"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-between">
              <Link href="/shop">
                <Button variant="ghost">← Continuer les achats</Button>
              </Link>
              <Button variant="outline" onClick={clearCart}>
                Vider le panier
              </Button>
            </div>
          </div>

          {/* Résumé de commande */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h2 className="font-semibold text-lg mb-4">Résumé de la commande</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span>{totalPrice().toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Livraison</span>
                  <span className="text-green-600">Gratuite</span>
                </div>
              </div>

              <div className="border-t my-4" />

              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span className="text-primary-600">{totalPrice().toFixed(2)} €</span>
              </div>

              {/* Code promo */}
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-2">Code promo</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Entrez votre code"
                    className="flex-1 border rounded px-3 py-2 text-sm"
                  />
                  <Button variant="outline" size="sm">
                    Appliquer
                  </Button>
                </div>
              </div>

              <Link href="/checkout">
                <Button className="w-full" size="lg">
                  Passer commande
                </Button>
              </Link>

              <p className="text-xs text-gray-500 text-center mt-4">
                Paiement sécurisé par Stripe
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

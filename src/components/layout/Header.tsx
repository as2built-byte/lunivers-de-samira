import Link from 'next/link'
import { ShoppingCart, User, Menu, Search, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Header() {
  // TODO: Récupérer depuis le store Zustand
  const cartItemsCount = 0
  const isLoggedIn = false

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold text-primary-500">
              L'univers de Samira
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/shop"
              className="text-gray-600 hover:text-primary-500 transition-colors font-medium"
            >
              Boutique
            </Link>
            <Link
              href="/formation"
              className="text-gray-600 hover:text-primary-500 transition-colors font-medium flex items-center gap-1"
            >
              <BookOpen className="w-4 h-4" />
              Formation
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-primary-500 transition-colors font-medium"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-primary-500 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Recherche */}
            <button
              className="p-2 text-gray-600 hover:text-primary-500 transition-colors"
              aria-label="Rechercher"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Panier */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-600 hover:text-primary-500 transition-colors"
              aria-label="Panier"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Compte utilisateur */}
            {isLoggedIn ? (
              <Link
                href="/account"
                className="p-2 text-gray-600 hover:text-primary-500 transition-colors"
                aria-label="Mon compte"
              >
                <User className="w-5 h-5" />
              </Link>
            ) : (
              <Link href="/auth/login">
                <Button size="sm">Connexion</Button>
              </Link>
            )}

            {/* Menu mobile */}
            <button
              className="md:hidden p-2 text-gray-600"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

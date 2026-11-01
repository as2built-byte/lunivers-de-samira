import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight, ShoppingBag, GraduationCap, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const Header = dynamic(() => import('@/components/layout/Header').then(mod => mod.Header), { ssr: false })

// Disable static generation
export const getServerSideProps = async () => {
  return { props: {} }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>L'univers de Samira - Boutique & Formation</title>
        <meta
          name="description"
          content="Découvrez notre boutique en ligne et nos formations exclusives. L'univers de Samira vous accompagne dans votre développement."
        />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Bienvenue dans
                <span className="text-primary-600"> L'univers de Samira</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Découvrez notre sélection unique de produits et nos formations
                exclusives pour développer vos compétences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/shop">
                  <Button size="lg" className="w-full sm:w-auto">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Explorer la boutique
                  </Button>
                </Link>
                <Link href="/formation">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Voir les formations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Boutique en ligne</h3>
                <p className="text-gray-600">
                  Des produits soigneusement sélectionnés pour vous accompagner au quotidien.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Formations complètes</h3>
                <p className="text-gray-600">
                  Des cours vidéo et tutoriels pour développer vos compétences à votre rythme.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Qualité garantie</h3>
                <p className="text-gray-600">
                  Un accompagnement personnalisé et un service client à votre écoute.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à commencer ?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
              Rejoignez notre communauté et accédez à du contenu exclusif.
            </p>
            <Link href="/auth/register">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Créer un compte gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-display text-xl font-bold mb-4">L'univers de Samira</h4>
              <p className="text-gray-400 text-sm">
                Votre destination pour les produits de qualité et les formations en ligne.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Boutique</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/shop" className="hover:text-white">Tous les produits</Link></li>
                <li><Link href="/shop/new" className="hover:text-white">Nouveautés</Link></li>
                <li><Link href="/shop/promo" className="hover:text-white">Promotions</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Formation</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/formation" className="hover:text-white">Tous les cours</Link></li>
                <li><Link href="/formation/free" className="hover:text-white">Cours gratuits</Link></li>
                <li><Link href="/formation/certificates" className="hover:text-white">Certificats</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Aide</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/legal" className="hover:text-white">Mentions légales</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} L'univers de Samira. Tous droits réservés.
          </div>
        </div>
      </footer>
    </>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight, Sparkles, Scissors, Heart, MessageCircle, Mail, MapPin, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const Header = dynamic(() => import('@/components/layout/Header').then(mod => mod.Header), { ssr: false })

// Numéro WhatsApp exact du site Framer
const WHATSAPP_NUMBER = '213779949411'
const EMAIL = 'luniversdesamira@gmail.com'

// Disable static generation
export const getServerSideProps = async () => {
  return { props: {} }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>L'univers de Samira — Couture, crochet & créations</title>
        <meta
          name="description"
          content="Des sacs faits main, des créations sur mesure et des cours de couture, coupe et crochet à Alger."
        />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-cream-50 to-primary-50 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-secondary-500 font-semibold tracking-widest uppercase mb-4">
                CRÉER. PARTAGER. INSPIRER.
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                L'UNIVERS DE
                <span className="text-primary-500"> SAMIRA</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Des sacs faits main, pensés pour vous.<br />
                <span className="text-primary-500 font-medium">Pièces uniques</span> créées avec passion à Alger.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/shop">
                  <Button size="lg" className="w-full sm:w-auto bg-primary-500 hover:bg-primary-700">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Découvrir les créations
                  </Button>
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour, je souhaite passer une commande`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-500 text-primary-500 hover:bg-primary-50">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Commander sur WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Créations vedettes */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Sacs & Créations
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Chaque sac est une pièce unique, confectionnée à la main avec des matériaux de qualité.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Bordeaux fleuri */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <span className="text-7xl">👜</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-secondary-500 text-sm font-medium">01</span>
                  <h3 className="text-white font-semibold text-lg">Bordeaux fleuri</h3>
                  <p className="text-gray-300 text-sm">Orné de fleurs et chaîne argentée</p>
                </div>
              </div>

              {/* Noir & or */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                  <span className="text-7xl">✨</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-secondary-500 text-sm font-medium">02</span>
                  <h3 className="text-white font-semibold text-lg">Noir & or</h3>
                  <p className="text-gray-300 text-sm">Fermoir et chaîne dorés</p>
                </div>
              </div>

              {/* Crochet brun */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center">
                  <span className="text-7xl">🧶</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-secondary-500 text-sm font-medium">03</span>
                  <h3 className="text-white font-semibold text-lg">Crochet brun</h3>
                  <p className="text-gray-300 text-sm">Fait main au crochet</p>
                </div>
              </div>

              {/* Reflets argentés */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <span className="text-7xl">💎</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-secondary-500 text-sm font-medium">04</span>
                  <h3 className="text-white font-semibold text-lg">Reflets argentés</h3>
                  <p className="text-gray-300 text-sm">Sac argenté avec fermoir</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link href="/shop">
                <Button variant="outline" className="border-primary-500 text-primary-500 hover:bg-primary-50">
                  Voir toutes les créations
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Sur Mesure - Le carnet des créations */}
        <section className="py-16 bg-cream-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-secondary-500 font-semibold tracking-wider uppercase text-sm">Le carnet des créations</span>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mt-2 mb-4">
                  Créations Sur Mesure
                </h2>
                <p className="text-gray-600 mb-6">
                  Dites-moi vos envies, vos couleurs, votre occasion.
                  Je crée pour vous un sac unique qui vous ressemble.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span>Choix des couleurs et matières</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span>Dimensions personnalisées</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span>Broderies et détails sur demande</span>
                  </li>
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour, je souhaite commander un sac sur mesure`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary-500 hover:bg-primary-700">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Demander un devis
                  </Button>
                </a>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl aspect-square flex items-center justify-center shadow-lg">
                <span className="text-9xl">🎨</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cours - Transmettre le savoir-faire */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-secondary-500 font-semibold tracking-wider uppercase text-sm">Apprendre</span>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mt-2 mb-4">
                Transmettre le Savoir-Faire
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Apprenez l'art de la couture et du crochet. <span className="font-medium text-primary-500">Aucun niveau requis.</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-cream-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scissors className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Couture</h3>
                <p className="text-gray-600 text-sm">
                  Les bases de la couture à la machine et à la main.
                </p>
              </div>

              <div className="bg-cream-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✂️</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Coupe</h3>
                <p className="text-gray-600 text-sm">
                  Apprenez à créer vos propres patrons.
                </p>
              </div>

              <div className="bg-cream-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧶</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Crochet</h3>
                <p className="text-gray-600 text-sm">
                  Techniques de base et création de sacs.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour, je souhaite réserver une place pour un cours`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-secondary-500 hover:bg-secondary-600 text-white">
                  Réserver une place
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Contact - Et si on créait ensemble ? */}
        <section className="py-16 bg-primary-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Et si on créait ensemble ?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
              Une idée, une question, un cadeau à offrir ? Contactez-moi !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour Samira !`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-primary-500 hover:bg-gray-100"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
              <a
                href={`mailto:${EMAIL}`}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-primary-600"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h4 className="font-serif text-xl font-bold mb-4">L'univers de Samira</h4>
              <p className="text-gray-400 text-sm mb-4">
                Des sacs faits main, des créations sur mesure et des cours de couture, coupe et crochet à Alger.
              </p>
              <div className="flex gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href={`mailto:${EMAIL}`} className="text-gray-400 hover:text-white" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/luniversdesamira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Boutique</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/shop" className="hover:text-white">Toutes les créations</Link></li>
                <li><Link href="/shop#surmesure" className="hover:text-white">Sur mesure</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Formations</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/formation" className="hover:text-white">Couture</Link></li>
                <li><Link href="/formation" className="hover:text-white">Coupe</Link></li>
                <li><Link href="/formation" className="hover:text-white">Crochet</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <MapPin className="w-4 h-4" />
              <span>Alger, Algérie</span>
            </div>
            <div>© {new Date().getFullYear()} L'univers de Samira. Tous droits réservés.</div>
          </div>
        </div>
      </footer>
    </>
  )
}

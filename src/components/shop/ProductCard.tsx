import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Star } from 'lucide-react'
import { Card, CardImage, CardContent, CardTitle, CardPrice } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface ProductCardProps {
  id: string
  name: string
  slug: string
  price: number
  comparePrice?: number
  image: string
  rating?: number
  reviewCount?: number
}

export function ProductCard({
  id,
  name,
  slug,
  price,
  comparePrice,
  image,
  rating = 0,
  reviewCount = 0,
}: ProductCardProps) {
  const discount = comparePrice ? Math.round((1 - price / comparePrice) * 100) : 0

  return (
    <Card hover>
      <Link href={`/shop/product/${slug}`}>
        <CardImage>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {discount > 0 && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
        </CardImage>
      </Link>

      <CardContent>
        <Link href={`/shop/product/${slug}`}>
          <CardTitle className="hover:text-primary-600 transition-colors line-clamp-2">
            {name}
          </CardTitle>
        </Link>

        {rating > 0 && (
          <div className="flex items-center gap-1 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({reviewCount})</span>
          </div>
        )}

        <CardPrice original={comparePrice}>
          {price.toFixed(2)} €
        </CardPrice>

        <Button
          className="w-full mt-4"
          onClick={(e) => {
            e.preventDefault()
            // TODO: Ajouter au panier
            console.log('🛒 Ajouter au panier:', id)
          }}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Ajouter au panier
        </Button>
      </CardContent>
    </Card>
  )
}

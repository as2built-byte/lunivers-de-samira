import Image from 'next/image'
import Link from 'next/link'
import { Play, Clock, BookOpen } from 'lucide-react'
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardPrice } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

type Level = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'

const levelLabels: Record<Level, string> = {
  BEGINNER: 'Débutant',
  INTERMEDIATE: 'Intermédiaire',
  ADVANCED: 'Avancé',
}

const levelColors: Record<Level, string> = {
  BEGINNER: 'bg-green-100 text-green-800',
  INTERMEDIATE: 'bg-yellow-100 text-yellow-800',
  ADVANCED: 'bg-red-100 text-red-800',
}

interface CourseCardProps {
  id: string
  title: string
  slug: string
  description: string
  price: number
  thumbnail: string
  level: Level
  duration?: number // en minutes
  lessonsCount?: number
  enrolled?: boolean
  progress?: number // 0-100
}

function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  if (hours === 0) return `${mins}min`
  if (mins === 0) return `${hours}h`
  return `${hours}h${mins}`
}

export function CourseCard({
  id,
  title,
  slug,
  description,
  price,
  thumbnail,
  level,
  duration,
  lessonsCount,
  enrolled = false,
  progress = 0,
}: CourseCardProps) {
  return (
    <Card hover>
      <Link href={`/formation/course/${slug}`}>
        <CardImage>
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {duration && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
              <Play className="w-3 h-3 fill-white" />
              {formatDuration(duration)}
            </div>
          )}
          {enrolled && progress > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
              <div
                className="h-full bg-primary-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </CardImage>
      </Link>

      <CardContent>
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs font-medium px-2 py-0.5 rounded ${levelColors[level]}`}>
            {levelLabels[level]}
          </span>
          {lessonsCount && (
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              {lessonsCount} leçons
            </span>
          )}
        </div>

        <Link href={`/formation/course/${slug}`}>
          <CardTitle className="hover:text-primary-600 transition-colors line-clamp-2">
            {title}
          </CardTitle>
        </Link>

        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>

        {!enrolled ? (
          <>
            <CardPrice>{price.toFixed(2)} €</CardPrice>
            <Button className="w-full mt-4">
              S'inscrire au cours
            </Button>
          </>
        ) : (
          <Button variant="secondary" className="w-full mt-4">
            {progress > 0 ? 'Continuer' : 'Commencer'}
            {progress > 0 && ` (${progress}%)`}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

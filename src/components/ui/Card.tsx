import { HTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'bg-white rounded-lg shadow-md overflow-hidden',
          hover && 'transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export const CardImage = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={clsx('relative aspect-square', className)} {...props}>
      {children}
    </div>
  )
)

CardImage.displayName = 'CardImage'

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={clsx('p-4', className)} {...props}>
      {children}
    </div>
  )
)

CardContent.displayName = 'CardContent'

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3 ref={ref} className={clsx('font-semibold text-lg text-gray-900', className)} {...props}>
      {children}
    </h3>
  )
)

CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={clsx('text-sm text-gray-600 mt-1', className)} {...props}>
      {children}
    </p>
  )
)

CardDescription.displayName = 'CardDescription'

export const CardPrice = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { original?: number }>(
  ({ className, original, children, ...props }, ref) => (
    <div ref={ref} className={clsx('mt-3 flex items-baseline gap-2', className)} {...props}>
      <span className="text-xl font-bold text-primary-600">{children}</span>
      {original && (
        <span className="text-sm text-gray-400 line-through">{original} €</span>
      )}
    </div>
  )
)

CardPrice.displayName = 'CardPrice'

# L'univers de Samira

## Description du projet
Plateforme e-commerce et formation en ligne comprenant :
- **Boutique en ligne** : catalogue produits, panier, paiement Stripe, espace client
- **Espace formation** : cours vidéo, tutoriels, suivi de progression, certificats

## Stack technique
- **Frontend** : Next.js 14 + TypeScript + Tailwind CSS
- **Backend** : Next.js API Routes
- **Base de données** : PostgreSQL avec Prisma ORM
- **Authentification** : NextAuth.js
- **Paiement** : Stripe
- **Stockage média** : Cloudinary ou S3
- **Tests** : Playwright (E2E) + Vitest (unitaires)

## Structure du projet
```
src/
├── pages/
│   ├── shop/          # Boutique (produits, panier, checkout)
│   ├── formation/     # Cours et vidéos
│   └── auth/          # Connexion, inscription, profil
├── components/        # Composants React réutilisables
├── lib/               # Utilitaires et helpers
├── api/               # Routes API
└── styles/            # Styles globaux et Tailwind
```

## Conventions
- Langue du code : Anglais
- Langue de l'UI : Français
- Commits : Conventional Commits (feat:, fix:, docs:, etc.)
- Tests obligatoires pour toute nouvelle fonctionnalité

## Plugins actifs
- **caveman** : Debug logging intelligent
- **playwright** : Tests E2E automatisés
- **security-sweep** : Audit sécurité avant déploiement
- **design.md** : Guidelines UI/UX cohérentes

## Commandes utiles
```bash
npm run dev          # Développement
npm run build        # Build production
npm run test         # Tests unitaires
npm run test:e2e     # Tests Playwright
npm run lint         # Linting
```

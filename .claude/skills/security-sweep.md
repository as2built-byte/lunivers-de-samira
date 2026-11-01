---
name: security-sweep
description: Audit de sécurité avant déploiement
triggers:
  - security
  - audit
  - deploy
  - production
---

# Security Sweep

Checklist de sécurité avant mise en production.

## Vérifications automatiques

### 1. Variables d'environnement
- [ ] Pas de secrets en dur dans le code
- [ ] `.env` dans `.gitignore`
- [ ] Variables sensibles préfixées sans `NEXT_PUBLIC_`

### 2. Authentification
- [ ] Mots de passe hashés (bcrypt)
- [ ] Sessions sécurisées (httpOnly, secure, sameSite)
- [ ] Rate limiting sur login
- [ ] Protection CSRF

### 3. API
- [ ] Validation des entrées (Zod)
- [ ] Sanitization des outputs
- [ ] CORS configuré correctement
- [ ] Headers de sécurité (Helmet)

### 4. Paiement (Stripe)
- [ ] Webhook signature vérifiée
- [ ] Pas de prix côté client
- [ ] Idempotency keys utilisées

### 5. Base de données
- [ ] Requêtes paramétrées (Prisma OK)
- [ ] Permissions minimales
- [ ] Backup configuré

### 6. Dépendances
```bash
npm audit
npx snyk test
```

## Commande de scan
```bash
npm run security:check
```

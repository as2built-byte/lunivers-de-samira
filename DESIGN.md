# Design System - L'univers de Samira

## Identité visuelle

### Palette de couleurs

| Nom | Hex | Usage |
|-----|-----|-------|
| **Primary** | `#d946ef` | Actions principales, liens, boutons CTA |
| **Secondary** | `#f97316` | Accents, badges, notifications |
| **Success** | `#22c55e` | Confirmations, validations |
| **Warning** | `#eab308` | Alertes, avertissements |
| **Error** | `#ef4444` | Erreurs, suppressions |
| **Neutral** | `#64748b` | Texte secondaire, bordures |

### Typographie

- **Titres** : Playfair Display (élégant, féminin)
- **Corps** : Inter (lisible, moderne)
- **Tailles** :
  - H1: 2.5rem (40px)
  - H2: 2rem (32px)
  - H3: 1.5rem (24px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

### Espacements

Base : 4px (`space-1` = 4px)

- `space-2`: 8px
- `space-4`: 16px
- `space-6`: 24px
- `space-8`: 32px
- `space-12`: 48px

### Rayons de bordure

- `rounded-sm`: 4px (boutons, inputs)
- `rounded-md`: 8px (cartes)
- `rounded-lg`: 12px (modales)
- `rounded-full`: 9999px (avatars, badges)

---

## Composants

### Boutons

```tsx
// Primary - Action principale
<Button variant="primary">Ajouter au panier</Button>

// Secondary - Action secondaire
<Button variant="secondary">En savoir plus</Button>

// Outline - Action tertiaire
<Button variant="outline">Annuler</Button>

// Ghost - Navigation
<Button variant="ghost">Retour</Button>
```

### Cartes produit

```
┌─────────────────────────┐
│  ┌───────────────────┐  │
│  │                   │  │
│  │      Image        │  │
│  │                   │  │
│  └───────────────────┘  │
│                         │
│  Nom du produit         │
│  ★★★★☆ (24 avis)       │
│                         │
│  49,99 €  ̶5̶9̶,̶9̶9̶ ̶€̶       │
│                         │
│  [  Ajouter au panier ] │
└─────────────────────────┘
```

### Cartes cours

```
┌─────────────────────────┐
│  ┌───────────────────┐  │
│  │    Thumbnail      │  │
│  │   ▶️ 2h30         │  │
│  └───────────────────┘  │
│                         │
│  📚 Débutant            │
│  Titre du cours         │
│  Description courte...  │
│                         │
│  29,99 €                │
│  [  S'inscrire  ]       │
└─────────────────────────┘
```

---

## Pages principales

### Page d'accueil
1. Hero avec slider promotionnel
2. Catégories populaires
3. Produits vedettes
4. Cours populaires
5. Témoignages
6. Newsletter

### Page boutique
- Filtres latéraux (catégorie, prix, tri)
- Grille de produits (3-4 colonnes)
- Pagination

### Page formation
- Filtres par niveau et durée
- Grille de cours
- Progression utilisateur (si connecté)

### Panier
- Liste des articles
- Résumé de commande
- Code promo
- Bouton checkout

### Espace personnel
- Dashboard avec statistiques
- Historique commandes
- Mes cours en cours
- Paramètres du compte

---

## Responsive

| Breakpoint | Taille | Colonnes grille |
|------------|--------|-----------------|
| Mobile | < 640px | 1-2 |
| Tablet | 640-1024px | 2-3 |
| Desktop | > 1024px | 3-4 |

---

## Accessibilité (a11y)

- Contraste minimum : 4.5:1
- Focus visible sur tous les éléments interactifs
- Labels sur tous les inputs
- Alt text sur toutes les images
- Navigation au clavier complète

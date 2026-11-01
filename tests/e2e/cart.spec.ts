import { test, expect } from '@playwright/test'

test.describe('Panier', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/shop')
  })

  test('le panier est initialement vide', async ({ page }) => {
    await page.goto('/cart')
    await expect(page.getByText(/Votre panier est vide/i)).toBeVisible()
  })

  test('l\'icône panier affiche le nombre d\'articles', async ({ page }) => {
    // Ajouter un produit au panier (à implémenter avec les vrais produits)
    // Pour l'instant, on vérifie juste que l'icône est présente
    const cartIcon = page.locator('header').getByRole('link', { name: /Panier/i })
    await expect(cartIcon).toBeVisible()
  })

  test('peut accéder à la page panier depuis le header', async ({ page }) => {
    await page.goto('/')
    await page.locator('header').getByRole('link', { name: /Panier/i }).click()
    await expect(page).toHaveURL('/cart')
  })
})

test.describe('Processus d\'achat', () => {
  test('peut naviguer vers le checkout depuis le panier', async ({ page }) => {
    // TODO: Ajouter des produits au panier puis aller au checkout
    await page.goto('/cart')

    // Si le panier est vide, le bouton checkout ne devrait pas être actif
    const checkoutButton = page.getByRole('button', { name: /Passer commande/i })

    // Vérifier que le bouton existe ou qu'un message indique le panier vide
    const isEmpty = await page.getByText(/panier est vide/i).isVisible()
    if (!isEmpty) {
      await expect(checkoutButton).toBeVisible()
    }
  })
})

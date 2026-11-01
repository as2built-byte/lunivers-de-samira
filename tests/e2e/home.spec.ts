import { test, expect } from '@playwright/test'

test.describe('Page d\'accueil', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('affiche le titre principal', async ({ page }) => {
    await expect(page.locator('h1')).toContainText("L'univers de Samira")
  })

  test('affiche les boutons d\'action principaux', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Explorer la boutique/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /Voir les formations/i })).toBeVisible()
  })

  test('navigation vers la boutique fonctionne', async ({ page }) => {
    await page.getByRole('link', { name: /Explorer la boutique/i }).click()
    await expect(page).toHaveURL('/shop')
  })

  test('navigation vers les formations fonctionne', async ({ page }) => {
    await page.getByRole('link', { name: /Voir les formations/i }).click()
    await expect(page).toHaveURL('/formation')
  })

  test('le header est présent avec les liens de navigation', async ({ page }) => {
    const header = page.locator('header')
    await expect(header).toBeVisible()
    await expect(header.getByRole('link', { name: /Boutique/i })).toBeVisible()
    await expect(header.getByRole('link', { name: /Formation/i })).toBeVisible()
  })

  test('le bouton de connexion est visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Connexion/i })).toBeVisible()
  })

  test('le footer est présent', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
    await expect(footer).toContainText('Tous droits réservés')
  })
})

test.describe('Responsive', () => {
  test('le menu mobile est visible sur petit écran', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    // Le bouton menu hamburger devrait être visible sur mobile
    await expect(page.getByRole('button', { name: /Menu/i })).toBeVisible()
  })
})

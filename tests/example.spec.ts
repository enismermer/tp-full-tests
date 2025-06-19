import { test, expect } from '@playwright/test';

test('form validations', async ({ page }) => {
  // Ouvre la page de l'application qui tourne en local sur le port 5174
  await page.goto('http://localhost:5174/')

  const button = page.getByRole('button', { name: 'Calculer' })
  await expect(button).toBeDisabled() // Vérifie que le bouton est désactivé par défaut

  const inputLune = page.locator('input[placeholder="Lune (1 ou 2)"]')
  await inputLune.fill('0') // Tente de remplir ce champ avec une valeur invalide "0"
  await expect(inputLune).toHaveValue('0') // Si la validation est correcte, la valeur ne devrait pas changer

  // Remplit le champ "Lune" avec une valeur valide (1)
  await inputLune.fill('1') 
  // Remplit également les champs "Soleil" et "Terre" avec la valeur "1"
  await page.locator('input[placeholder="Soleil (1 ou 2)"]').fill('1')
  await page.locator('input[placeholder="Terre (1 ou 2)"]').fill('1')

  await expect(button).toBeEnabled() // Vérifie que le bouton est maintenant activé
  await button.click() // Clique sur le bouton pour lancer le calcul
  await expect(page.locator('p')).not.toBeEmpty() // Vérifie que le paragraphe (qui affiche le résultat) n’est pas vide

  await page.screenshot({ path: 'screenshots/result.png' });
})

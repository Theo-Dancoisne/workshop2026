import { test, expect } from './config/fixtures';

// average runtime: 50s
test('basic', async ({ page }) => {
  test.slow();

  // await page.goto("/");
  await page.goto("/workshop2026");
  // await page.goto('http://localhost:3000/workshop2026');
  await page.locator('#unlock-btnNew').fill('1');
  await page.getByRole('textbox', { name: 'Blaze du groupe' }).fill('groupe test');
  await page.getByRole('button', { name: 'Let\'s start!' }).click();
  await page.getByRole('link').first().click();

  // 1
  await page.getByRole('button', { name: '✅ Vrai' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 2
  await page.getByRole('button', { name: '✅ Vrai' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 3
  await page.locator('label').filter({ hasText: 'Les algorithmes' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 4
  await page.getByRole('button', { name: '✅ Vrai' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 5
  await page.getByRole('button', { name: '✅ Vrai' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 6
  await page.getByRole('button', { name: '✅ Vrai' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 7
  await page.locator('label').filter({ hasText: 'Rien du tout' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 8
  await page.getByRole('button', { name: '✅ Vrai' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 9
  await page.locator('label').filter({ hasText: 'Si elle fait le buzz' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 10
  await page.locator('label').filter({ hasText: 'Les vraies infos' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 11
  await page.locator('label').filter({ hasText: 'Oui, le pamplemousse' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 12
  await page.getByRole('button', { name: '✅ Vrai' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 13
  await page.getByRole('button', { name: '✅ Vrai' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 14
  await page.locator('label').filter({ hasText: 'Le croire immédiatement' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 15
  await page.getByRole('button', { name: '❌ Faux' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 16
  await page.getByRole('button', { name: '✅ Vrai' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 17
  await page.getByRole('button', { name: '✅ Vrai' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  // 18
  await page.locator('label').filter({ hasText: 'L\'appliquer immédiatement' }).click();
  await page.getByRole('button', { name: 'Valider' }).click();
  await page.getByRole('button', { name: 'Question suivante →' }).click();

  await expect(async () => {
    expect(page.url()).toBe("http://localhost:3000/workshop2026/home-menu");
  }).toPass({
    intervals: [1_000, 2_000, 5_000, 7_000],
    timeout: 20_000
  });
});


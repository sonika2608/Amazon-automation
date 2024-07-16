import { chromium, expect, type FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const { baseURL } = config.projects[0].use;
  const browser = await chromium.launch({headless:false});
  const page = await browser.newPage();
  await page.goto(baseURL!);
  await page.locator('#nav-tools a[data-nav-role="signin"]').hover();
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await page.getByLabel('Enter your mobile number or').fill(process.env.USERID!);
  await page.getByLabel('Continue').click();
  await page.getByLabel('Password').fill(process.env.PASSWORD!);
  await page.getByLabel('Sign in').click();
  await page.context().storageState({ path: 'storage-state.json' });
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon.in/);
  // Expect page should not contain text "sign in".
  await expect(page.locator('#nav-link-accountList-nav-line-1')).not.toContainText(/sign in/);
  await browser.close();
}

export default globalSetup;

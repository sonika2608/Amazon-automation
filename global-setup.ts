import { chromium, type FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const { baseURL } = config.projects[0].use;
  const browser = await chromium.launch({headless:false});
  const page = await browser.newPage();
  await page.goto(baseURL!);
  await page.locator('#nav-tools a[data-nav-role="signin"]').hover();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Enter your mobile number or').fill(process.env.USERNAME!);
  await page.getByLabel('Continue').click();
  await page.getByLabel('Password').fill(process.env.PASSWORD!);
  await page.getByLabel('Sign in').click();
  await page.waitForTimeout(6000);
  await page.context().storageState({ path: 'storage-state.json' });
  await browser.close();
}

export default globalSetup;

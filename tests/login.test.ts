import { test, expect } from '@playwright/test';
import { GotoHomePage } from '../pages/gotoHome.page';

test('Validate successful login', async ({ page }) => {
  const gotoHomePage = new GotoHomePage(page);
  await gotoHomePage.gotoAmazon();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon.in/);

  // Expect page should not contain text "sign in".
  await expect(gotoHomePage.accountName).not.toContainText(/sign in/);
});
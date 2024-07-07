import { test, expect } from '@playwright/test';
import { GotoWebsitePage } from '../pages/gotoWebsite.page';

test('Validate successful login', async ({ page }) => {
  const gotoWebsitePage = new GotoWebsitePage(page);
  await gotoWebsitePage.gotoAmazon();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon.in/);

  // Expect page should not contain text "sign in".
  await expect(page.locator('#nav-link-accountList-nav-line-1')).not.toContainText(/sign in/);
});
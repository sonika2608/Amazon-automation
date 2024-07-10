import { expect, type Locator, type Page } from '@playwright/test';
import { SearchPage } from './search.page';

export class AddToCartPage {
  readonly page: Page;
  readonly searchResultItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchResultItems = page.locator('.a-section.a-spacing-none~.s-result-item a');
  }

  async addToCart(pagePromise: Promise<Page>) {
    await this.searchResultItems.first().click();
    const page = await pagePromise;
    await expect(this.page).toHaveTitle(/shoes|Women|Nike/)
    await page.getByLabel('Add to Cart').click();
    await page.locator('#sw-gtc').getByRole('link', { name: 'Go to Cart' }).click();
  }
}
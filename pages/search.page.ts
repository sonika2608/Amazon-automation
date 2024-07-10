import { expect, type Locator, type Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchItemInputBox: Locator;
  readonly searchButton: Locator;
  readonly searchResult: Locator;
  readonly brandInSearchResult: Locator;
  readonly searchResultItems: Locator;
  readonly categoryInSearchResult: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchItemInputBox = page.getByPlaceholder('Search Amazon.in');
    this.searchButton = page.getByRole('button', { name: 'Go' });
    this.searchResult = page.locator('.rush-component .a-section.a-spacing-small.a-spacing-top-small>>nth=0')
    this.searchResultItems = page.locator('.a-section.a-spacing-none~.s-result-item');
    this.brandInSearchResult = page.locator('div[data-cy="title-recipe"] .a-row');
    this.categoryInSearchResult = page.locator('.a-size-base-plus.a-color-base.a-text-normal');
  }

  async searchItem(productName: string) {
    await this.searchItemInputBox.click();
    await this.searchItemInputBox.fill(productName);
    await this.page.keyboard.press('Enter');
  }


  async applyFilters(category: string, brand: string) {
    await this.page.getByRole('link', { name: category }).click();
    await this.page.getByRole('link', { name: brand }).click();
  }

  async verifyFiltersApplied(brand: string) {
   await this.page.waitForTimeout(5000)
   const resultList = this.searchResultItems;
   const resultCount = await resultList.count();
   // verify filters in first searched results
   for(let item = 0; item < resultCount-(resultCount-1); item++){  
    await expect((this.brandInSearchResult).nth(item)).toContainText(brand);
    await expect((this.categoryInSearchResult).nth(item)).toContainText(/Women|women/);
   }  
  }

}

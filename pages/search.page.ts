import { expect, type Locator, type Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchItemInputBox: Locator;
  readonly searchButton: Locator;
  readonly brandList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchItemInputBox = page.getByPlaceholder('Search Amazon.in');
    this.searchButton = page.getByRole('button', { name: 'Go' });
    this.brandList = page.locator('#brandsRefinements .a-unordered-list>.a-declarative li');
    // this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
  }

  async searchItem() {
    await this.searchItemInputBox.click();
    await this.searchItemInputBox.fill('shoes');
    await this.page.keyboard.press('Enter');
  }

  async applyFilterForBrand(brandName: string) {
  //  const shoesBrandList = this.brandList;
  //  const brandCount = await shoesBrandList.count();
  //  for(let item = 0; item < brandCount; item++){
  //   const shoesBrandName = await shoesBrandList.nth(item).innerText();
  //   if(shoesBrandName === brandName){
  //     await shoesBrandList.nth(item).click();
  //     await this.page.waitForTimeout(2000);
  //   }
  //  }

  await this.page.getByRole('link', { name: 'Women\'s Running Shoes' }).click();
  await this.page.getByLabel('5', { exact: true }).click();
  await this.page.getByRole('link', { name: 'Nike' }).click();
  }

//   async addToCart() {
//     await page.getByRole('link', { name: 'Nike Womens W Air Zoom Pegasus 40 Running Shoes' }).click();
// const page1 = await page1Promise;
// await page1.getByLabel('Add to Cart').click();
// await page1.locator('#sw-gtc').getByRole('link', { name: 'Go to Cart' }).click();
//   }

}



// await page.goto('https://www.amazon.in/');
// await page.getByPlaceholder('Search Amazon.in').fill('shoes');
// await page.getByRole('button', { name: 'Go', exact: true }).click();
// await page.getByRole('link', { name: 'Puma', exact: true }).click();
// await page.getByRole('link', { name: 'Lightweight' }).click();
// const page1Promise = page.waitForEvent('popup');
// await page.getByRole('link', { name: 'Puma Men\'s Dazzler Sneakers' }).click();
// const page1 = await page1Promise;
// await page1.getByTitle('Add to Shopping Cart').click();
// await page1.getByText('Added to Cart Size: 10 UK').click();



// await page.goto('https://www.amazon.in/');
// await page.getByPlaceholder('Search Amazon.in').fill('shoes');
// await page.getByPlaceholder('Search Amazon.in').press('Enter');
// await page.getByRole('link', { name: 'Women\'s Running Shoes' }).click();
// await page.getByLabel('5', { exact: true }).click();
// await page.getByRole('link', { name: 'Nike' }).click();
// const page1Promise = page.waitForEvent('popup');
// await page.getByRole('link', { name: 'Nike Womens W Air Zoom Pegasus 40 Running Shoes' }).click();
// const page1 = await page1Promise;
// await page1.getByLabel('Add to Cart').click();
// await page1.locator('#sw-gtc').getByRole('link', { name: 'Go to Cart' }).click();
// const page2Promise = page1.waitForEvent('popup');
// await page1.getByRole('link', { name: 'Nike Womens Running Shoes, Grey, 5 UK (7.5 US)', exact: true }).click();
// const page2 = await page2Promise;
// await page1.locator('#sc-subtotal-label-buybox').click();
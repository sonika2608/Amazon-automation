import { type Page } from '@playwright/test';

export class GotoWebsitePage {
  readonly page: Page;


  constructor(page: Page) {
    this.page = page;
  }

  async gotoAmazon() {
    await this.page.goto('https://www.amazon.in/');
  }

}
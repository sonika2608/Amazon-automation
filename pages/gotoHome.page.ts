import { Locator, type Page } from '@playwright/test';

export class GotoHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoAmazon() {
    await this.page.goto('https://www.amazon.in/');
  }

}

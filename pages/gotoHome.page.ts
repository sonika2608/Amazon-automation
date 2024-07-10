import { Locator, type Page } from '@playwright/test';

export class GotoHomePage {
  readonly page: Page;
  readonly accountName: Locator;


  constructor(page: Page) {
    this.page = page;
    this.accountName = page.locator('#nav-link-accountList-nav-line-1')
  }

  async gotoAmazon() {
    await this.page.goto('https://www.amazon.in/');
  }

}
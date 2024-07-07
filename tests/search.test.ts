import { test, expect, type Page } from '@playwright/test';
import { GotoWebsitePage } from '../pages/gotoWebsite.page';
import { SearchPage } from '../pages/search.page';

test.beforeEach(async ({ page }) => {
  const gotoWebsitePage = new GotoWebsitePage(page);
  await gotoWebsitePage.gotoAmazon();
});

// const TODO_ITEMS = [
//   'buy some cheese',
//   'feed the cat',
//   'book a doctors appointment'
// ] as const;


  test('should allow to search items', async ({ page }) => {
    // search for item "shoes"
    const searchPage = new SearchPage(page);
    await searchPage.searchItem();

    // make sure search results are for shoes
    // await expect(page.getByTestId('todo-title')).toHaveText([
    //   TODO_ITEMS[0]
    // ]);
  });

  test('should allow to apply filters', async ({ page }) => {
    // apply brand filter
    const brandName = 'Nike';
    const searchPage = new SearchPage(page);
    await searchPage.searchItem();
    await searchPage.applyFilterForBrand(brandName);

  });
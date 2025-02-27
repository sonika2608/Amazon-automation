import { test, expect, type Page } from '@playwright/test';
import { GotoHomePage } from '../pages/gotoHome.page';
import { SearchPage } from '../pages/search.page';

test.beforeEach(async ({ page }) => {
  const gotoHomePage = new GotoHomePage(page);
  await gotoHomePage.gotoAmazon();
});


  test('should allow to search item', async ({ page }) => {
    // search for item "shoes"
    const productName = 'shoes';
    const searchPage = new SearchPage(page);
    await searchPage.searchItem(productName);
    // make sure search results are for shoes
    await expect(searchPage.searchResult).toContainText(/results for "shoes"/);
  });
  

  test('should allow to apply filters', async ({ page }) => {
    const searchPage = new SearchPage(page);
    // search for item "shoes"
    const productName = 'shoes';
    await searchPage.searchItem(productName);
    // apply filter1 
    const category = 'Women\'s Running Shoes';
    // apply filter2
    const brand = 'Nike';
    await searchPage.applyFilters(category, brand);
    // make sure filters are applied
    await searchPage.verifyFiltersApplied(brand);
  });
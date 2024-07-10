import { test, expect, type Page } from '@playwright/test';
import { GotoHomePage } from '../pages/gotoHome.page';
import { SearchPage } from '../pages/search.page';
import { AddToCartPage } from '../pages/addToCart.page';

test.beforeEach(async ({ page }) => {
  const gotoHomePage = new GotoHomePage(page);
  await gotoHomePage.gotoAmazon();
});

test('should allow to add item to cart', async ({ page }) => {
    const searchPage = new SearchPage(page);
    const addToCartPage = new AddToCartPage(page);
    // search for item "shoes"
    const productName = 'shoes';
    await searchPage.searchItem(productName);
    // apply filter1 
    const category = 'Women\'s Running Shoes';
    // apply filter2
    const brand = 'Nike';
    await searchPage.applyFilters(category, brand);
    // add to cart item
    const pagePromise = page.waitForEvent('popup');
    await addToCartPage.addToCart(pagePromise);
  });
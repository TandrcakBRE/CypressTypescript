/// <reference types="cypress"/>

import BasePage from '../../pages/base-page';

const pages = new BasePage();

describe('Practice test suite', function () {
  beforeEach(function () {
    cy.fixture('testDataSite2').then(function (data) {
      this.data = data;
    });
    cy.login(Cypress.env('userEmail'), Cypress.env('userPassword'));
  });

  //Go to orders tab and go back to home page
  it('Orders tab', function () {
    cy.visit('/' + Cypress.env('pathSite2'));
    pages.homePageSite2.orders().click();
    cy.url().should('include', '/dashboard/myorders');
    pages.ordersPageSite2.backToShop().click();
    cy.url().should('include', '/dashboard/dash');
  });

  //Go to cart, verify that there are no products in cart and go back to home page
  it('Cart tab', function () {
    cy.visit('/' + Cypress.env('pathSite2'));
    pages.homePageSite2.cart().click();
    cy.url().should('include', '/dashboard/cart');
    pages.cartPageSite2.noProductsMessage().should('be.visible');
    pages.cartPageSite2.continueShopping().click();
    cy.url().should('include', '/dashboard/dash');
  });

  //Click on sign out and verify that you are on login page and Login button is visible
  it('Sign out', function () {
    cy.visit('/' + Cypress.env('pathSite2'));
    pages.homePageSite2.signOut().click();
    cy.url().should('include', '/client/auth/login');
    pages.loginPageSite2.loginButton().should('be.visible');
  });
});

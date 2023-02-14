/// <reference types="cypress"/>

import BasePage from '../../pages/base-page';

const pages = new BasePage();

describe('Test Suite 3', function () {
  beforeEach(function () {
    cy.fixture('testDataSite2').then(function (data) {
      this.data = data;
    });
    cy.loginApi(Cypress.env('userEmail'), Cypress.env('userPassword'));
  });

  //Verify that you are automaticaly logged in when you open Login page in browser
  it('Verify api login', function () {
    cy.visit('/' + Cypress.env('pathSite2'));
    cy.url().should('include', '/dashboard/dash');
  });

  //E2E test - buying product
  it('Buying adidas shoes', function () {
    cy.visit('/' + Cypress.env('pathSite2'));
    cy.url().should('include', '/dashboard/dash');
    pages.homePageSite2.searchField().type(this.data.addidasShoe);
    pages.homePageSite2.searchField().type('{enter}');
    cy.wait(2000);
    pages.homePageSite2.addToCartButton().click();
    pages.homePageSite2.cart().click();
    pages.cartPageSite2.checkoutButton().click();
    pages.paymentPageSite2
      .creditCardNumber()
      .clear()
      .type(this.data.creditCardNumber);
    pages.paymentPageSite2.creditCardMonth().select(this.data.creditCardMonth);
    pages.paymentPageSite2.creditCardYear().select(this.data.creditCardYear);
    pages.paymentPageSite2.cvvCode().type(this.data.cvvCode);
    pages.paymentPageSite2.creditCardName().type(this.data.creditCardName);
    pages.paymentPageSite2
      .userEmail()
      .should('have.value', Cypress.env('userEmail'));
    pages.paymentPageSite2
      .creditCardCountry()
      .type(this.data.creditCardCountry);
    cy.wait(1000);
    pages.paymentPageSite2.creditCardCountryDdl().click();
    pages.paymentPageSite2.placeOrderButton().click();
    pages.finalPageSite2.tyMessage().should('be.visible');
  });
});

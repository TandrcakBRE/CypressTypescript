/// <reference types="cypress"/>

import BasePage from '../../pages/base-page';

const pages = new BasePage();

describe('Test Suite 2', function () {
  beforeEach(function () {
    cy.fixture('testDataSite2').then(function (data) {
      this.data = data;
    });
  });

  //Test is checking error message when password is missing
  it('Missing password', function () {
    cy.visit('/' + Cypress.env('pathSite2'));
    pages.loginPageSite2.email().type(Cypress.env('userEmail'));
    pages.loginPageSite2.loginButton().click();
    pages.loginPageSite2
      .missingPasswordMessage(this.data.missingPasswordMessage)
      .should('be.visible');
  });

  //Test is checking error message when email is missing
  it('Missing email', function () {
    cy.visit('/' + Cypress.env('pathSite2'));
    pages.loginPageSite2.password().type(Cypress.env('userPassword'));
    pages.loginPageSite2.loginButton().click();
    pages.loginPageSite2
      .missingPasswordMessage(this.data.missingEmailMessage)
      .should('be.visible');
  });

  //Test is checking that user can not login with invalid email/password combination
  it('Wrong email/password combination', function () {
    cy.visit('/' + Cypress.env('pathSite2'));
    pages.loginPageSite2.email().type(Cypress.env('userEmail'));
    pages.loginPageSite2.password().type('randomPassword');
    pages.loginPageSite2.loginButton().click();
    cy.url().should('not.include', '/dashboard/dash');
  });
});

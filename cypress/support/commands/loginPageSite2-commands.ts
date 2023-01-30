/// <reference types="cypress"/>

import BasePage from '../../e2e/pages/base-page';

const pages = new BasePage();

Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/' + Cypress.env('pathSite2'));
    pages.loginPageSite2.email().type(username);
    pages.loginPageSite2.password().type(password);
    pages.loginPageSite2.loginButton().click();
    cy.url().should('include', '/dashboard/dash');
  });
});

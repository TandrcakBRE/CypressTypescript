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

Cypress.Commands.add('loginApi', (username, password) => {
  cy.session([username, password], () => {
    cy.request('POST', '/' + Cypress.env('site2apiLogin'), {
      userEmail: username,
      userPassword: password,
    }).then(function (response) {
      expect(response.status).to.eq(200);
      Cypress.env('token', response.body.token);
      cy.log(Cypress.env('token'));
      cy.visit('/' + Cypress.env('pathSite2'), {
        onBeforeLoad: function (window) {
          window.localStorage.setItem('token', Cypress.env('token'));
        },
      });
      cy.url().should('include', '/dashboard/dash');
    });
  });
});

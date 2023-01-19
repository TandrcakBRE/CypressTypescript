/// <reference types="cypress"/>

import BasePage from '../../pages/base-page';

const pages = new BasePage();

describe('Test suite 3', function () {
  beforeEach(function () {
    cy.fixture('testDataSite1').then(function (data) {
      this.data = data;
    });
  });
  it('Test with error example', function () {
    cy.visit('/' + Cypress.env('pathSite1'));
    cy.get('blabla').click();
  });
});

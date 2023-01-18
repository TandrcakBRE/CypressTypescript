/// <reference types="cypress"/>
import BasePage from '../pages/base-page';
const pages = new BasePage();
describe('Practice test suite', function () {
  before(function () {
    cy.fixture('testDataSite1').then(function (data) {
      this.data = data;
    });
  });
  it('Popups example', function () {
    cy.visit('/' + Cypress.env('pathSite1'));
    cy.get('blabla').click();
    //window:alert
    //pages.firstPageSite1.alertButton().click();

    //window.confirm da da da
  });
});

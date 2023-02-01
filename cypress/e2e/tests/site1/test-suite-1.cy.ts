/// <reference types="cypress"/>

import BasePage from '../../pages/base-page';

const pages = new BasePage();

describe('Test Suite 1', function () {
  beforeEach(function () {
    cy.fixture('testDataSite1').then(function (data) {
      this.data = data;
    });
  });

  //Test covers clicking on radio buttons and verifying that they are checked
  it('Radio button example', function () {
    cy.visit('/' + Cypress.env('pathSite1'));
    pages.firstPageSite1.radioButton1().click().should('be.checked');
    pages.firstPageSite1.radioButton2().click().should('be.checked');
    pages.firstPageSite1.radioButton3().click().should('be.checked');
  });

  //Test covers handling dynamic ddl
  it('Suggestion class example (dynamic ddl)', function () {
    cy.visit('/' + Cypress.env('pathSite1'));
    pages.firstPageSite1.autocompleteField().type(this.data.country1);
    cy.dynamicDdl(this.data.country1);
    pages.firstPageSite1
      .autocompleteField()
      .should('have.value', this.data.country1);
  });

  //Test covers handling static ddl, selecting different options
  it('Dropdown example (static ddl)', function () {
    cy.visit('/' + Cypress.env('pathSite1'));
    pages.firstPageSite1.staticDdl().select(this.data.dropDownOption1);
    pages.firstPageSite1.staticDdl().select(this.data.dropDownOption2);
    pages.firstPageSite1.staticDdl().select(this.data.dropDownOption3);
  });

  //Test covers handling checkboxes, checking, unchecking, verifying...
  it('Checkbox example', function () {
    cy.visit('/' + Cypress.env('pathSite1'));
    pages.firstPageSite1.allCheckboxes().check().should('be.checked');
    pages.firstPageSite1.allCheckboxes().uncheck().should('not.be.checked');
    pages.firstPageSite1.checkBoxOption1().check().should('be.checked');
    pages.firstPageSite1.checkBoxOption1().uncheck().should('not.be.checked');
    pages.firstPageSite1
      .allCheckboxes()
      .check(['option2', 'option3'])
      .should('be.checked');
  });
});

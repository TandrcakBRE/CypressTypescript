/// <reference types="cypress"/>

import BasePage from '../../pages/base-page';

const pages = new BasePage();

describe('Test Suite 2', function () {
  beforeEach(function () {
    cy.fixture('testDataSite1').then(function (data) {
      this.data = data;
    });
  });

  //Test covers handling hide/show field and verifications if field is hidden or displayed
  it('Hide/show field example', function () {
    cy.visit('/' + Cypress.env('pathSite1'));
    pages.firstPageSite1.hideButton().click();
    pages.firstPageSite1.textBoxField().should('not.be.visible');
    pages.firstPageSite1.showButton().click();
    pages.firstPageSite1.textBoxField().should('be.visible');
  });

  //Test covers handling alert and confirm popup and verifying text in them
  it('Popups example', function () {
    cy.visit('/' + Cypress.env('pathSite1'));
    //window:alert
    pages.firstPageSite1.alertButton().click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(this.data.alertExpectedText);
    });
    //window.confirm
    pages.firstPageSite1.confirmButton().click();
    cy.on('window:confirm', (str) => {
      expect(str).to.equal(this.data.confirmExpectedText);
    });
  });

  //Test covers handling web table and verifying value in it
  it('Web table example', function () {
    cy.visit('/' + Cypress.env('pathSite1'));
    cy.coursePriceVerification(
      this.data.courseName,
      this.data.courseExpectedPrice,
    );
  });

  //Test covers mouse hover event
  it('Mouse hover example', function () {
    cy.visit('/' + Cypress.env('pathSite1'));
    pages.firstPageSite1.mouseHoverTop().click({ force: true });
    cy.url().should('include', 'top');
  });
});

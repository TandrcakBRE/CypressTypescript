/// <reference types="cypress" />

class PaymentPageSite2 {
  creditCardNumber() {
    return cy.get(':nth-child(1) > .field > .input');
  }

  creditCardMonth() {
    return cy.get('.form__cc > :nth-child(2) > :nth-child(1) > :nth-child(2)');
  }

  creditCardYear() {
    return cy.get('.form__cc > :nth-child(2) > :nth-child(1) > :nth-child(3)');
  }

  cvvCode() {
    return cy.get(':nth-child(2) > :nth-child(2) > .input');
  }

  creditCardName() {
    return cy.get(':nth-child(3) > .field > .input');
  }

  userEmail() {
    return cy.get('.user__name > .ng-untouched');
  }

  creditCardCountry() {
    return cy.get('.form-group > .input');
  }

  creditCardCountryDdl() {
    return cy.get('.ta-item');
  }

  placeOrderButton() {
    return cy.contains('Place Order');
  }
}
export default PaymentPageSite2;

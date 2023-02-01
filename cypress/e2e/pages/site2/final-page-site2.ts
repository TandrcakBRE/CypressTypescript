/// <reference types="cypress" />

class FinalPageSite2 {
  tyMessage() {
    return cy.contains(' Thankyou for the order.');
  }
}
export default FinalPageSite2;

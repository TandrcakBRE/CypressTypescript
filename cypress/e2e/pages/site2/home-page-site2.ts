/// <reference types="cypress" />

class HomePageSite2 {
  orders() {
    return cy.contains('ORDERS');
  }
  cart() {
    return cy.contains('Cart');
  }
  signOut() {
    return cy.contains('Sign Out');
  }
}
export default HomePageSite2;

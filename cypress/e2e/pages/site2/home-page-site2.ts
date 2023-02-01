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

  searchField() {
    return cy.get(
      '#sidebar > form.ng-untouched > :nth-child(1) > .form-control',
    );
  }

  addToCartButton() {
    return cy.get('.w-10:visible');
  }
}
export default HomePageSite2;

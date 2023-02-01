/// <reference types="cypress" />

class CartPageSite2 {
  continueShopping() {
    return cy.contains('Continue Shopping');
  }

  noProductsMessage() {
    return cy.contains('No Products in Your Cart !');
  }

  checkoutButton() {
    return cy.contains('Checkout');
  }
}
export default CartPageSite2;

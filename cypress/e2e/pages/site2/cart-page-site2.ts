/// <reference types="cypress" />

class CartPageSite2 {
  continueShopping() {
    return cy.contains('Continue Shopping');
  }
  noProductsMessage() {
    return cy.contains('No Products in Your Cart !');
  }
}
export default CartPageSite2;

/// <reference types="cypress" />

class OrdersPageSite2 {
  backToShop() {
    return cy.contains('Go Back to Shop');
  }
}
export default OrdersPageSite2;

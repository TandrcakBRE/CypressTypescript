/// <reference types="cypress" />

class LoginPageSite2 {
  email() {
    return cy.get('#userEmail');
  }
  password() {
    return cy.get('#userPassword');
  }
  loginButton() {
    return cy.get('#login');
  }
  missingPasswordMessage(message) {
    return cy.contains(message);
  }
  missingEmailMessage(message) {
    return cy.contains(message);
  }
}
export default LoginPageSite2;

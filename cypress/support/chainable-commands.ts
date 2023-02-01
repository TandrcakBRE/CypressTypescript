import './commands/commands';
import './commands/firstPageSite1-commands';
import './commands/loginPageSite2-commands';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select country from dynamic ddl
       * @param countryName=Brazil
       * @example cy.dynamicDdl("countryName")
       */
      dynamicDdl(countryName: string): Chainable;

      /**
       * Custom command to verify course price from table
       * @param courseName=Name of course
       * @param courseExpectedPrice=20
       * @example cy.coursePriceVerification('courseName','courseExpectedPrice')
       */
      coursePriceVerification(
        courseName: string,
        courseExpectedPrice: string,
      ): Chainable;

      /**
       * Custom command to login with UI
       * @param username = username
       * @param password = userPassword
       * @example cy.login("username","password")
       */
      login(username: string, password: string): Chainable;

      /**
       * Custom command to login with API
       * @param username = username
       * @param password = userPassword
       * @example cy.loginApi("username","password")
       */
      loginApi(username: string, password: string): Chainable;
    }
  }
}

import './commands/commands';
import './commands/firstPageSite1-commands';

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
    }
  }
}

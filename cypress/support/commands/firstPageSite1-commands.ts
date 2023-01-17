/// <reference types="cypress"/>

import BasePage from '../../e2e/pages/base-page';

const pages = new BasePage();

Cypress.Commands.add('dynamicDdl', (countryName) => {
  //handle dynamic ddl
  pages.firstPageSite1.autocompleteDdl().each(($el, index, $list) => {
    if ($el.text() === countryName) {
      cy.wrap($el).click();
    }
  });
});

Cypress.Commands.add(
  'coursePriceVerification',
  (courseName, courseExpectedPrice) => {
    //Verify price in web table
    pages.firstPageSite1.tebleColumn2().each(($e1, index, $list) => {
      const text = $e1.text();
      if (text.includes(courseName)) {
        pages.firstPageSite1
          .tebleColumn2()
          .eq(index)
          .next()
          .then(function (price) {
            const priceText = price.text();
            expect(priceText).to.equal(courseExpectedPrice);
          });
      }
    });
  },
);

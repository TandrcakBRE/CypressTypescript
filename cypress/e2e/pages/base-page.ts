/// <reference types="cypress" />
import FirstPageSite1 from './site1/first-page-site1';
class BasePage {
  firstPageSite1 = new FirstPageSite1();
}
export default BasePage;

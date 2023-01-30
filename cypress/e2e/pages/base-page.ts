/// <reference types="cypress" />
import FirstPageSite1 from './site1/first-page-site1';
import LoginPageSite2 from './site2/login-page-site2';
import HomePageSite2 from './site2/home-page-site2';
import OrdersPageSite2 from './site2/orders-page-site2';
import CartPageSite2 from './site2/cart-page-site2';

class BasePage {
  firstPageSite1 = new FirstPageSite1();
  loginPageSite2 = new LoginPageSite2();
  homePageSite2 = new HomePageSite2();
  ordersPageSite2 = new OrdersPageSite2();
  cartPageSite2 = new CartPageSite2();
}
export default BasePage;

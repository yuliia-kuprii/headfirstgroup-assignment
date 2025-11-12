import { ProductsPage } from '../pages/productsPage'
import { CookieDialogComponent } from '../pages/components/cookieDialogComponent'
import { BasketPage } from '../pages/basketPage'
import { AddressPage } from '../pages/addressPage';
import { DeliveryPage } from '../pages/deliveryPage';
import { PaymentPage } from '../pages/paymentPage';
import { OrderSummaryPage } from '../pages/orderSummaryPage'

describe('Golden path scenario', () => {
  const cookieDialogComponent = new CookieDialogComponent();
  const productsPage = new ProductsPage();
  const basketPage = new BasketPage();
  const addressPage = new AddressPage();
  const deliveryPage = new DeliveryPage();
  const paymentPage = new PaymentPage();
  const orderSummaryPage = new OrderSummaryPage();

  it('Place an order', () => {
    productsPage.goToPage();
    cookieDialogComponent.removeCookieDialog();

    productsPage.addAppleJuiceToBasket();
    productsPage.addApplePomaceToBasket();
    productsPage.addBananaJuiceToBasket();
    productsPage.clickShoppingCartButton();

    basketPage.removeAppleJuiceItemFromBasket();
    basketPage.increaseApplePomace();
    basketPage.checkBasketTotalPrice();
    basketPage.clickCheckoutButton();

    addressPage.clickNewAddressButton();
    addressPage.enterCountryName();
    addressPage.enterUserName();
    addressPage.enterMobileNumber();
    addressPage.enterZipCode();
    addressPage.enterStreetAddress();
    addressPage.enterCityName();
    addressPage.clickAddressSubmitButton();
    addressPage.clickAddressRadioButton();
    addressPage.clickContinueButton();

    deliveryPage.clickStandardDelivery();
    deliveryPage.clickContinueToPayment();

    paymentPage.clickNewPaymentCardPanel();
    paymentPage.enterCardHolderName();
    paymentPage.enterCardNumber();
    paymentPage.selectMonth();
    paymentPage.selectYear();
    paymentPage.clickToSavePaymentCard();
    paymentPage.selectPaymentCard();
    paymentPage.clickReviewButton();

    orderSummaryPage.clickOrderButton();
    orderSummaryPage.verifyOrderCompeletionText();
  });
});

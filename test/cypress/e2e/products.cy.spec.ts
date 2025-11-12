import { ProductsPage } from '../pages/productsPage'
import { CookieDialogComponent } from '../pages/components/cookieDialogComponent'
import { BasketPage } from '../pages/basketPage'
import { AddressPage } from '../pages/addressPage';
import { DeliveryPage } from '../pages/deliveryPage';
import { PaymentPage } from '../pages/paymentPage';
import { OrderSummaryPage } from '../pages/orderSummaryPage'

describe('Products page', () => {
  const cookieDialogComponent = new CookieDialogComponent();
  const productsPage = new ProductsPage();
  const basketPage = new BasketPage();
  const addressPage = new AddressPage();
  const deliveryPage = new DeliveryPage();
  const paymentPage = new PaymentPage();
  const orderSummaryPage = new OrderSummaryPage();

  it('should add products to the Backet', () => {
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
    addressPage.typeCountryName();
    addressPage.typeUserName();
    addressPage.typeMobileNumber();
    addressPage.typeZipCode();
    addressPage.typeStreetAddress();
    addressPage.typeCityName();
    addressPage.clickAddressSubmitButton();
    addressPage.clickAddressRadioButton();
    addressPage.clickContinueButton();

    deliveryPage.clickStandardDelivery();
    deliveryPage.clickContinueToPayment();
    
    paymentPage.clickNewPaymentCardPanel();
    paymentPage.typeCardHolderName();
    paymentPage.typeCardNumber();
    paymentPage.selectMonth();
    paymentPage.selectYear();
    paymentPage.clickToSavePaymentCard();
    paymentPage.selectPaymentCard();
    paymentPage.clickReviewButton();

    orderSummaryPage.clickOrderButton();
    orderSummaryPage.verifyOrderCompeletionText();
  })
})
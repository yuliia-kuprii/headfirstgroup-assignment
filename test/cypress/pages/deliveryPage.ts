export class DeliveryPage {
  private standardDeliveryButtonSelector = '[data-test-id="standard-delivery-3"]';
  private continueToPaymentButtonSelector = '[data-test-id="continue-to-payment-button"]';

  public clickStandardDelivery() {
    cy.get(this.standardDeliveryButtonSelector).should('be.visible').click();
  }

  public clickContinueToPayment() {
    cy.get(this.continueToPaymentButtonSelector).should('be.visible').click();
  }
}

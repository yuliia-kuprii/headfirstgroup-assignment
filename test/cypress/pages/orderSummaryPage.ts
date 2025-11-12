export class OrderSummaryPage {
  private orderButtonSelector = '[data-test-id="order-checkout-button"]';
  private orderCompletionText = 'Thank you for your purchase!';

  public clickOrderButton() {
    cy.get(this.orderButtonSelector).should('be.visible').click();
  }

  public verifyOrderCompeletionText() {
   cy.contains('h1', this.orderCompletionText).should('be.visible');
  }
}

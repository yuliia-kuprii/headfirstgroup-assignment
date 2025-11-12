export class PaymentPage {
  private addNewPaymentCardSelector = '[data-test-id="add-new-card-expansion-panel"]';
  private cardHolderNameInputSelector = '[data-test-id="card-holder-name-input"]';
  private cardNumberInputSelector = '[data-test-id="card-number-input"]';
  private monthOptionSelector = '[data-test-id="month-select"]';
  private yearOptionSelector = '[data-test-id="year-select"]';
  private submitPaymentCardSelector = '[data-test-id="submit-payment-card"]';
  private existingCardButtonSelector = '[data-test-id="select-existing-card-radio-button"]';
  private reviewButtonSelector = '[data-test-id="proceed-to-review-button"]';

  public clickNewPaymentCardPanel() {
    cy.get(this.addNewPaymentCardSelector).scrollIntoView().should('be.visible').click();
  }

  public enterCardHolderName() {
    cy.get(this.cardHolderNameInputSelector).should('be.visible').type('Yuliia');
  }

  public enterCardNumber() {
    cy.get(this.cardNumberInputSelector).should('be.visible').type('4000005280000002');
  }

  public selectMonth() {
    cy.get(this.monthOptionSelector).select('1');
  }

  public selectYear() {
    cy.get(this.yearOptionSelector).select('2080');
  }

  public clickToSavePaymentCard() {
    cy.get(this.submitPaymentCardSelector).should('be.visible').click();
  }

  public selectPaymentCard() {
    cy.get(this.existingCardButtonSelector).first().should('exist').click();
  }

  public clickReviewButton() {
    cy.get(this.reviewButtonSelector).scrollIntoView().should('be.visible').click();
  }
}

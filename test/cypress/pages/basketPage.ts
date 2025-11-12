export class BasketPage {
  private appleJuiceTrashButtonSelector = '[data-test-id="Apple Juice (1000ml) delete-basket-item"]';
  private applePomacePlusButtonSelector = '[data-test-id="increase-24"]';
  private basketTotalPriceSelector = '[data-test-id="basket-total-price"]';
  private checkoutButtonSelector = '[data-test-id="checkout-button"]';

  public removeAppleJuiceItemFromBasket() {
    cy.get(this.appleJuiceTrashButtonSelector).should('be.visible').click();
  }

  public increaseApplePomace() {
    /**
     * TODO:
     * Investigate why click is not performed on some machines.
     * Reproducible on Macbook Pro 2015.
     * Remove wait(100).
     */
    cy.wait(100).get(this.applePomacePlusButtonSelector).should('be.visible').click();
  }

  public checkBasketTotalPrice() {
    cy.get(this.basketTotalPriceSelector).contains('3.77');
  }

  public clickCheckoutButton() {
    cy.get(this.checkoutButtonSelector).scrollIntoView().should('be.visible').click();
  }
}

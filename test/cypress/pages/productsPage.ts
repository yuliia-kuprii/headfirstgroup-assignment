export class ProductsPage {
  private appleJuiceSelector = '[data-test-id="Apple Juice (1000ml) add-to-basket"]';
  private applePomaceSelector = '[data-test-id="Apple Pomace add-to-basket"]';
  private bananaJuiceSelector = '[data-test-id="Banana Juice (1000ml) add-to-basket"]';
  private shoppingCart = '[data-test-id="shopping-cart"]';

  public goToPage() {
    cy.visit('/');
  }

  public addAppleJuiceToBasket() {
    cy.get(this.appleJuiceSelector).should('be.visible').click();
  }

  public addApplePomaceToBasket() {
    cy.get(this.applePomaceSelector).should('be.visible').click();
  }

  public addBananaJuiceToBasket() {
    cy.get(this.bananaJuiceSelector).should('be.visible').click();
  }

  public clickShoppingCartButton() {
    cy.get(this.shoppingCart).scrollIntoView().should('be.visible').click();
  }
}
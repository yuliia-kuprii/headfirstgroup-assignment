export class AddressPage {
  private addNewAddressButtonSelector = '[data-test-id="add-new-address-button"]';
  private countryInputSelector = '[data-test-id="country-input"]';
  private userNameInputSelector = '[data-test-id="name-input"]';
  private mobileNumberInputSelector = '[data-test-id="mobile-number-input"]';
  private zipCodeInputSelector = '[data-test-id="zip-code-input"]';
  private addressTextAreaSelector = '[data-test-id="address-text-area"]';
  private cityInputSelector = '[data-test-id="city-input"]';
  private addAddressSubmitButtonSelector = '[data-test-id="add-address-submit-button"]';
  private addressButtonSelector = '[data-test-id="address-radio-button"]';
  private continueButtonSelector = '[data-test-id="continue-button"]';

  public clickNewAddressButton() {
    cy.get(this.addNewAddressButtonSelector).scrollIntoView().should('be.visible').click();
  }

  public enterCountryName() {
    cy.get(this.countryInputSelector).should('be.visible').type('Netherlands');
  }

  public enterUserName() {
    cy.get(this.userNameInputSelector).should('be.visible').type('Yuliia');
  }

  public enterMobileNumber() {
    cy.get(this.mobileNumberInputSelector).should('be.visible').type('616827641');
  }

  public enterZipCode() {
    cy.get(this.zipCodeInputSelector).should('be.visible').type('2132 LS');
  }

  public enterStreetAddress() {
    cy.get(this.addressTextAreaSelector).should('be.visible').type('Taurusavenue 18');
  }

  public enterCityName() {
    cy.get(this.cityInputSelector).should('be.visible').type('Hoofddorp');
  }

  public clickAddressSubmitButton() {
    cy.get(this.addAddressSubmitButtonSelector).should('be.visible').click();
  }

  public clickAddressRadioButton() {
    cy.get(this.addressButtonSelector).first().should('be.visible').click();
  }

  public clickContinueButton() {
    cy.get(this.continueButtonSelector).scrollIntoView().should('be.visible').click();
  }
}

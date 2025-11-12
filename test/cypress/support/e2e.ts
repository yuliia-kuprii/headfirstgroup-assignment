import '../support/commands';

before(() => {
  cy.createNewUserViaAPI()
  .then(() => {
    cy.loginViaAPI();
  });
});

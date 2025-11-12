import users from '../fixtures/users'

const { email, password } = users.user;

declare global {
  namespace Cypress {
    interface Chainable {
      loginViaAPI(): Chainable<JQuery<HTMLElement>>
      createNewUserViaAPI(): Chainable<JQuery<HTMLElement>>
    }
  }
}

Cypress.Commands.add('loginViaAPI', () => {
  cy.session('userSession', () => {
    cy.request({
      url: '/rest/user/login',
      method: 'POST',
      body: {
        email: email,
        password: password,
      },
      headers: {
        'content-type': 'application/json',
      },
      failOnStatusCode: false
  }).then((response) => {
    if (response.status === 200) {
      const token = response.body.authentication.token;
      const bid = response.body.authentication.bid;
      window.localStorage.setItem('token', token);
      window.sessionStorage.setItem('bid', bid);
      cy.setCookie('token', token);
      cy.setCookie('welcomebanner_status', 'dismiss');
    }
    });
  });
});

Cypress.Commands.add('createNewUserViaAPI', () => {
  cy.request({
    url: '/api/Users/',
    method: 'POST',
    body: { 
      email: email, 
      password: password,
      passwordRepeat: password, 
      securityQuestion: { 
        id: 12, 
        question: "Your favorite movie?", 
        securityAnswer: "Bugonia" 
      },
    },
    failOnStatusCode: false
  });
});
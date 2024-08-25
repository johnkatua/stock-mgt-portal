/// <reference types="cypress" />

export {}; // Ensures TypeScript treats this file as a module

Cypress.Commands.add('login', (email: string, password: string) => {
  const { SHORT_WAIT } = Cypress.env();
  cy.get('[data-testid=email-input]').type(email);
  cy.get('[data-testid=password-input]').type(password, { log: false });
  cy.get('[data-testid=login-btn]').click();

  cy.wait(SHORT_WAIT);

  cy.url().should('include', '/dashboard');
});

// Augmenting Cypress' Chainable interface
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
    }
  }
}

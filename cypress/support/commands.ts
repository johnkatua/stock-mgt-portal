/// <reference types="cypress" />

import { Supplier } from '../../app/suppliers/AddSupplierForm';

export {}; // Ensures TypeScript treats this file as a module

const { MEDIUM_WAIT, SHORT_WAIT } = Cypress.env();

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/');
  cy.get('[data-testid=email-input]').type(email);
  cy.get('[data-testid=password-input]').type(password, { log: false });
  cy.get('[data-testid=login-btn]').click();

  cy.wait(MEDIUM_WAIT);

  cy.url().should('include', '/dashboard');
});

Cypress.Commands.add('logout', () => {
  cy.get('[data-testid=user-avatar]').trigger('mouseover');
  cy.get('[data-testid=logout-btn]').should('be.visible');
  cy.get('[data-testid=logout-btn]').click();
  cy.url().should('include', '/');
});

Cypress.Commands.add('createSupplier', (config) => {
  const { supplier_name, contact_name, phone, address } = config;
  cy.log(supplier_name);
  cy.get('[data-testid=suppliers-link]').click();
  cy.url().should('include', '/suppliers');
  cy.wait(SHORT_WAIT);
  cy.get('[data-testid=add-supplier-btn]').click();
  cy.get('[data-testid=supplier-name-input]').type(supplier_name);
  cy.get('[data-testid=contact-name-input]').type(contact_name);
  cy.get('[data-testid=supplier-phone-input').type(phone);
  cy.get('[data-testid=supplier-address-input]').type(address);
  cy.get('[data-testid=save-supplier-btn]').click();
  cy.get('.ant-modal-close').click();
  cy.wait(MEDIUM_WAIT);
});

Cypress.Commands.add('deleteSupplier', (name) => {
  cy.get('table')
    .contains('tr', name)
    .should('be.visible')
    .within(() => {
      cy.get('td').eq(4).should('contain', 'Delete');
      cy.get('[data-testid=delete-supplier-btn]').click();
    });
  cy.wait(SHORT_WAIT);
  cy.contains('Supplier Deleted Successfully!');
});

// Augmenting Cypress' Chainable interface
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      logout(): Chainable<void>;
      createSupplier(config: Supplier): Chainable<void>;
      deleteSupplier(name: string): Chainable<void>;
    }
  }
}

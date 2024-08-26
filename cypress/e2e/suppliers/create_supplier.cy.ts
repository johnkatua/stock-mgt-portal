/// <reference types="cypress" />

import supplierConfig from '../../fixtures/suppliers/create_supplier.json';

describe('Login and create a supplier', () => {
  const { email, password } = Cypress.env();
  before(() => {
    cy.login(email, password);
  });

  it('create a supplier', () => {
    cy.createSupplier(supplierConfig);
  });

  after(() => {
    cy.logout();
  });
});

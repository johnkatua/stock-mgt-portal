import supplierConfig from '../../fixtures/suppliers/create_supplier.json';

describe('Login and delete  a supplier', () => {
  const { email, password } = Cypress.env();
  const { supplier_name } = supplierConfig;

  before(() => {
    cy.login(email, password);
  });

  it('delete a supplier', () => {
    cy.deleteSupplier(supplier_name);
  });

  after(() => {
    cy.logout();
  });
});

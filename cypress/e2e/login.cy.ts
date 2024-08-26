describe('Login', () => {
  it('Navigate to the application', () => {
    const { email, password } = Cypress.env();

    cy.login(email, password);

    cy.logout();
  });
});

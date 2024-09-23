describe('Login', () => {
  it('Navigate to the application', () => {
    // const { email, password } = Cypress.env();
    const email = Cypress.env('USER_EMAIL');
    const password = Cypress.env('USER_PASSWORD');

    cy.login(email, password);

    cy.logout();
  });
});

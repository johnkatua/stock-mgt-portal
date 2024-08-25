describe('Login', () => {
  it('Navigate to the application', () => {
    cy.visit('/');

    cy.get('[data-testid=email-input]').type('test.user@example.com');

    cy.get('[data-testid=password-input]').type('');

    cy.get('[data-testid=login-btn]').click();
  });
});

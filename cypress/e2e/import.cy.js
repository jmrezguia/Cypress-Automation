import LoginPage from 'cypress/support/pagesObjects/LoginPage';
import userData from 'cypress/fixtures/userData.json';

describe('Test simple', () => {
  it('Vérifie les imports', () => {
    expect(LoginPage).to.exist;
    expect(userData).to.exist;
    cy.log('Imports réussis');
  });
});

// cypress/support/pagesObjects/LoginPage.js
class LoginPage {
  visitLoginPage() {
    cy.visit('/web/index.php/auth/login'); // Navigue vers la page de connexion
  }

  login(username, password) {
    cy.get("input[placeholder='Username']").should('be.visible').type(username); // Saisit le nom d'utilisateur
    cy.get("input[placeholder='Password']").should('be.visible').type(password); // Saisit le mot de passe
    cy.get("button[type='submit']").click(); // Clique sur le bouton de connexion
  }

  verifySuccessfulLogin() {
    // Vérifie que l'utilisateur est redirigé vers le tableau de bord
    cy.url({ timeout: 10000 }).should('include', '/web/index.php/dashboard');
  }

  verifyLoginError() {
    // Vérifie que le message d'erreur est visible
    cy.get('.oxd-alert-content-text') // Remplacez avec le sélecteur CSS correct
      .should('be.visible') // Vérifie que le message est visible
      .and('contain', 'Invalid credentials'); // Vérifie que le texte correspond
  }
}
const loginPage = new LoginPage(); // Crée une instance unique
export default loginPage;
  
// cypress/e2e/login.cy.js
import LoginPage from '../support/pagesObjects/LoginPage'; // Importez la classe LoginPage
import userData from '../fixtures/userData'; // Importez les données utilisateur

// Créez une instance de la classe LoginPage
const loginPage = new LoginPage();

describe('Login Test Suite', () => {
  it('should successfully log in with valid credentials', () => {
    // Étape 1 : Visitez la page de connexion
    loginPage.visitLoginPage();

    // Étape 2 : Utilisez les données du fichier userData pour se connecter
    loginPage.login(userData.validUser.username, userData.validUser.password);

    // Étape 3 : Vérifiez que l'utilisateur est redirigé vers le tableau de bord
    loginPage.verifySuccessfulLogin(); // Vérifie que l'URL contient "/dashboard"
  });

  it('should fail to log in with invalid credentials', () => {
    // Étape 1 : Visitez la page de connexion
    loginPage.visitLoginPage();

    // Étape 2 : Essayez de vous connecter avec des identifiants invalides
    loginPage.login(userData.invalidUser.username, userData.invalidUser.password);
    

    // Étape 3 : Vérifiez qu'un message d'erreur est affiché
    loginPage.verifyLoginError(); // Vérifie le contenu du message d'erreur
  });
});

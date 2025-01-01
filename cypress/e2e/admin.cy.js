/// <reference types="cypress" />
import adminPage from "../support/pagesObjects/AdminPage"; // Import de AdminPage
import adminData from "../fixtures/adminData.json"; // Import des données admin
import userData from "../fixtures/userData.json"; // Import des données utilisateur

describe("Admin Page Test Suite", () => {
  before(() => {
    // Se connecter avec LoginPage via AdminPage
    adminPage.visitDashboardWithLogin(userData.validUser.username, userData.validUser.password);
  });

  it("should add a new admin successfully", () => {
    // Vérifiez que les données nécessaires sont bien définies
    if (!adminData.validUser || !adminData.validUser.role) {
      throw new Error("Les données utilisateur valides sont manquantes ou incomplètes dans adminData.json");
    }

    // Naviguer vers la page Admin
    adminPage.navigateToAdmin();

    // Cliquer sur le bouton "Add"
    adminPage.clickAddButton();

    // Remplir les champs nécessaires
    adminPage.selectUserRole(adminData.validUser.role);
    adminPage.selectUserStatus(adminData.validUser.status);
    adminPage.fillEmployeeName(adminData.validUser.employeeName);
    adminPage.fillUsername(adminData.validUser.username);
    adminPage.fillPassword(adminData.validUser.password);
    adminPage.fillConfirmPassword(adminData.validUser.confirmPassword);

    // Enregistrer
    adminPage.clickSave();

    // Vérifier que l'utilisateur est bien ajouté
    //adminPage.verifySuccessMessage();
  });
});

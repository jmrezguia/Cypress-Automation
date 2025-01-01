import loginPage from "./LoginPage";

class AdminPage {
  adminMenu = ".oxd-main-menu-item--name"; // Menu Admin
  addButton = "button[class='oxd-button oxd-button--medium oxd-button--secondary']";
  userRoleDropdown = ".oxd-select-text--active";
  userStatusDropdown = ".oxd-select-wrapper";
  employeeNameInput = "input[placeholder='Type for hints...']";
  usernameInput = ".oxd-input--active";
  passwordInput = "input[type='password']";
  confirmPasswordInput = "input[type='password']";
  saveButton = "button[type='submit']";
  //successToast = ".oxd-toast"; // Toast de succès

  visitDashboardWithLogin(username, password) {
    loginPage.visitLoginPage(); // Navigue vers la page de connexion
    loginPage.login(username, password); // Effectue la connexion
    loginPage.verifySuccessfulLogin(); // Vérifie la connexion réussie
  }

  navigateToAdmin() {
    cy.get(this.adminMenu).contains("Admin").click(); // Clique sur le menu Admin
  }

  clickAddButton() {
    cy.get(this.addButton).click(); // Clique sur le bouton "Add"
  }

  selectUserRole(optionText) {
    // Cliquez sur le bouton dropdown
    cy.get(this.userRoleDropdown).eq(0).click();

    // Attendez que les options deviennent visibles
    cy.get('.oxd-select-dropdown').should('be.visible');

    // Sélectionnez l'option par son texte
    cy.contains('.oxd-select-option', optionText).click();
  }
selectUserStatus(optionText) {
  // Sélectionner le dropdown spécifique pour "Status"
  cy.get(this.userStatusDropdown).eq(1).find('.oxd-select-text--active').click();

  // Assurez-vous que les options sont visibles
  cy.get('.oxd-select-dropdown').should('be.visible');

  // Cliquez sur l'option correspondant à `optionText`
  cy.contains('.oxd-select-option', optionText).click();
}

  fillEmployeeName(employeeName) {
    // Tapez dans le champ
  cy.get(this.employeeNameInput).should('be.visible').type(employeeName);

  // Cliquez directement sur la suggestion correspondante
  
  }

  fillUsername(username) {
    cy.get(this.usernameInput).should('be.visible')
    .eq(1)
    .type(username); // Remplit le champ Nom d'utilisateur
  }

  fillPassword(password) {
   cy.get(this.passwordInput)
   .eq(0)
   .should('be.visible')
   .type(password); // Remplit le champ Mot de passe
  }

  fillConfirmPassword(confirmPassword) {
    cy.get(this.confirmPasswordInput)
    .eq(1)
    .should('be.visible')
    .type(confirmPassword); // Remplit le champ Confirmation
  }

  clickSave() {
    cy.get(this.saveButton).should('be.visible').click(); // Clique sur le bouton Enregistrer
  }

  // Vérifier la requête réseau
//verifyurl(){cy.intercept('POST', '/api/v2/admin/*').as('saveRequest');
//cy.wait('@saveRequest').its('response.statusCode').should('eq', 200);

// Vérifier la redirection
//cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers'); // Remplacez par l'URL attendue
}
  //verifySuccessMessage() {
    //cy.get(this.successToast).should("be.visible").and("contain", "Success"); // Vérifie le toast de succès
 // }
//}

export default new AdminPage();

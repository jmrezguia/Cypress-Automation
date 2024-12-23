class LoginPage {



    usernameInput="input[placeholder='Username']"; 
    passwordInput="input[placeholder='Password']";
    submitButton="button[type='submit']";
    errorMessage=".oxd-text.oxd-text--p.oxd-alert-content-text";

    visit() {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
  
    setUserName(username) {
    cy.get (this.usernameInput).should('be.visible').type(username);
    }
  
    setPassword(password) {
     cy.get (this.passwordInput).should('be.visible').type(password);
    }
  
    clickSubmit() {
     cy.get(this.submitButton).click();
    }

    verifyLogin(successUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard') {
      cy.url().should('include', successUrl);
    }

    verifyErrorMessage(expectedMessage) {
     cy.get(this.errorMessage).should('contain.text', expectedMessage);
  }
}
  export default new LoginPage();
  
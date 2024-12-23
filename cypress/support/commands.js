

// Authentification
Cypress.Commands.add('login', (email, password) => {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard'); // Vérifier la redirection
  });
  

// Dropdown
Cypress.Commands.add('selectDropdown', (dropdownSelector, optionText) => {
    cy.get(dropdownSelector).click(); // Ouvrir le dropdown
    cy.contains('li', optionText).click(); // Sélectionner l'option
  });
  

// Panier
Cypress.Commands.add('addToCart', (productName) => {
  cy.contains('.product-title', productName) // Localiser le produit par son nom
    .parent() // Naviguer vers le conteneur du produit
    .find('.add-to-cart-button') // Bouton Ajouter au panier
    .click();
  cy.get('.cart-notification').should('be.visible'); // Vérification
});


// Recherche
Cypress.Commands.add('searchProduct', (productName) => {
  cy.get('input[placeholder="Rechercher"]').type(productName);
  cy.get('button[type="submit"]').click();
  cy.contains('.product-title', productName).should('be.visible');
});


// Loader
Cypress.Commands.add('waitForLoader', (loaderSelector, timeout = 10000) => {
  cy.get(loaderSelector, { timeout }).should('not.exist');
});

// Checkout
Cypress.Commands.add('checkout', () => {
  cy.get('.cart-button').click();
  cy.get('.proceed-to-checkout').click();
  cy.get('input[name="address"]').type('123 Rue de Paris');
  cy.get('input[name="city"]').type('Paris');
  cy.selectDropdown('#country-select', 'France');
  cy.get('button.confirm-order').click();
  cy.contains('Merci pour votre achat').should('be.visible');
});


// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
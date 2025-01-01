// support/e2e.js

// Import des commandes personnalisées
import './commands';

// Tu peux également configurer des listeners globaux
Cypress.on('uncaught:exception', (err, runnable) => {
    // Empêche les erreurs non interceptées de bloquer les tests
    return false;

    // Autres configurations globales possibles (facultatif)

// Exemple : Ajouter un hook avant chaque test pour afficher un message dans la console
beforeEach(() => {
    cy.log('Démarrage du test');

    
});
require('cypress-xpath');

});
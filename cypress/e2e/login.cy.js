/// <reference types="cypress" />

import LoginPage from "../support/pagesObjects/LoginPage.js";
import userData from "../fixtures/userData.json";


describe('Test de connexion', () => {
  it('Se connecter avec des informations valides', () => {

    

    LoginPage.visit();
  

    LoginPage.setUserName(userData.Name); // Renseigner le nom d'utilisateur
    LoginPage.setPassword(userData.Password); // Renseigner le mot de passe
    LoginPage.clickSubmit(); // Cliquer sur "Se connecter"
    LoginPage.verifyLogin(); // Vérifier la réussite de la connexion
  });


  it('Connexion avec un mot de passe invalide', () => {
    LoginPage.setUserName(userData.Name); // Nom d'utilisateur incorrect
    LoginPage.setPassword(userData.ErrPasswoed); // Mot de passe valide
    LoginPage.clickSubmit();
    LoginPage.verifyErrorMessage(userData.ErrMessage);
  });
  });



const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Node event listeners
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com", // Mettez votre URL ici
    chromeWebSecurity: false, // Si nécessaire
  },
  video: false, // Désactiver l'enregistrement vidéo
  watchForFileChanges: false, // Réduit les problèmes liés aux fichiers
});



const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com', // Définir le baseUrl
    setupNodeEvents(on, config) {
      // Implémentez les événements node ici si nécessaire
    },
  },
  chromeWebSecurity: false, // Désactive la sécurité Web Chrome si nécessaire
  video: false, // Désactive l'enregistrement vidéo
  watchForFileChanges: false, // Réduit les problèmes liés aux fichiers modifiés
});


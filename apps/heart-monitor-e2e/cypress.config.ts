import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run heart-monitor:serve:development',
        production: 'nx run heart-monitor:serve:production',
      },
      ciWebServerCommand: 'nx run heart-monitor:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});

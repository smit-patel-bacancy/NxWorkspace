import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run BacancyAngularIntegratedApplication:serve',
        production:
          'npx nx run BacancyAngularIntegratedApplication:serve-static',
      },
      ciWebServerCommand:
        'npx nx run BacancyAngularIntegratedApplication:serve-static',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4200',
  },
});

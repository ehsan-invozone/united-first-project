import {KeycloakService } from 'keycloak-angular';  // Keycloak auth comment
import { environment } from 'src/environments/environment';

export function initializeKeycloak(keycloak: KeycloakService):()=>Promise<boolean> {
    return () =>
      keycloak.init({
        config: {
          url: environment.authURL+'/auth',
          realm: 'UFP DEV',
          clientId: 'UFP',
        },
        initOptions: {
            checkLoginIframe:true,
            checkLoginIframeInterval:25
          },
          loadUserProfileAtStartUp:true
      });
  }
  
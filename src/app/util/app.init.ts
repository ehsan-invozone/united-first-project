import {KeycloakService } from 'keycloak-angular';
export function initializeKeycloak(keycloak: KeycloakService):()=>Promise<boolean> {
    return () =>
      keycloak.init({
        config: {
          url: 'https://preprodjv.dba.ma'+'/auth',
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
  
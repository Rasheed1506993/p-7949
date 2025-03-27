
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.f239cb29bd464f80b9b65ebefe813a3f',
  appName: 'عقارات',
  webDir: 'dist',
  server: {
    url: 'https://f239cb29-bd46-4f80-b9b6-5ebefe813a3f.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined,
      keystorePassword: undefined,
      keystoreAliasPassword: undefined,
    }
  }
};

export default config;

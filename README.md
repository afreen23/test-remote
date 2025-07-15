
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.20.

## Development server

Run `ng serve ` for a dev server. Navigate to `http://localhost:4300/`. The application will automatically reload if you change any of the source files.

## Host app changes

1. Update `src/assets/module-federation.manifest.json `

```json
{ 
  "remote-app": "http://localhost:4300/remoteEntry.js" 
}
```

2. Update `src/app/app-routing.module.ts`

```typescript
import { loadRemoteModule } from '@nx/angular/mf'; 

... 

const routes: Routes = [ 

  { 

    path: 'plugin', 

    loadChildren: () => 

      loadRemoteModule('remote-app', './Module').then((m) => m.RemotePluginModule) 

  },
```
3. Run your host app and visit: https://localhost:4200/#/plugin

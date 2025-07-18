## Development server

Firstly, run `ng serve ` for running the remote app. Navigate to `http://localhost:4300/`. The application will automatically reload if you change any of the source files.

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

   <img width="1920" height="968" alt="image" src="https://github.com/user-attachments/assets/21b7abc9-cef8-461a-9963-ee28e27887a5" />


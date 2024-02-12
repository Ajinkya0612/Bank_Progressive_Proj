import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

<<<<<<< HEAD
import { AppRoutingModule } from './app/app-routing.module';
=======
import { AppModule } from './app/app.module';
>>>>>>> 627b932617476d74b5308bdc8fc0f67ee634f20f
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppRoutingModule)
=======
platformBrowserDynamic().bootstrapModule(AppModule)
>>>>>>> 627b932617476d74b5308bdc8fc0f67ee634f20f
  .catch(err => console.error(err));

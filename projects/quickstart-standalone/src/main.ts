import { bootstrapApplication } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { provideOAuthClient } from 'lacuna-oauth2-oidc';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideOAuthClient()],
});

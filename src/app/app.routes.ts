import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'project/:id', component: LandingPageComponent },
];

import { Routes } from '@angular/router';
import { ProjectShowcaseComponent } from './components/landing-page/projects-showcase/projects-showcase.component';
import { FancyHoverEffectsComponent } from './components/projects/fancy-hover-effects/fancy-hover-effects.component';
import { ProjectGuideComponent } from './components/projects/project-guide/project-guide.component';

export const appRoutes: Routes = [
  { path: 'home', component: ProjectShowcaseComponent },
  { path: 'project/1', component: ProjectGuideComponent },
  { path: 'project/2', component: FancyHoverEffectsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

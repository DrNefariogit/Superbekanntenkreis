import { Routes } from '@angular/router';
import { ProjectShowcaseComponent } from './components/landing-page/projects-showcase/projects-showcase.component';
import { ProjectGuideComponent } from './components/projects/project-guide/project-guide.component';

export const appRoutes: Routes = [
  { path: '', component: ProjectShowcaseComponent },
  { path: 'project/1', component: ProjectGuideComponent },
];

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { OrganizationComponent } from './organization/organization.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { CredentialsComponent } from './credentials/credentials.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'organisation', component: OrganizationComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'credentials', component: CredentialsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent },
];

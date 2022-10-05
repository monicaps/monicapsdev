import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { CommunityComponent } from './community/community.component';
import { InitiativesComponent } from './initiatives/initiatives.component';

const routes: Routes = [
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path: 'projects',
    component:ProjectsComponent
  },
  {
    path: 'initiatives',
    component:InitiativesComponent
  },
  {
    path: 'community',
    component:CommunityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

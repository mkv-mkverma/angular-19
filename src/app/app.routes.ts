import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { DirectivesComponent } from './directives/directives.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BuildInPipesComponent } from './build-in-pipes/build-in-pipes.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProfileComponent } from './profile/profile.component';
import { CurdComponent } from './curd/curd.component';
import { CurdFormComponent } from './curd/curd-form/curd-form.component';
import { ResourceApiComponent } from './resource-api/resource-api.component';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' }, // redirects ONLY when URL is EXACTLY empty
  { path: 'user', component: UserComponent },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.component').then((c) => c.ProfileComponent),
  },
  // { path: 'profile', component: ProfileComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'attribute-directives', component: AttributeDirectivesComponent },
  { path: 'build-in-pipes', component: BuildInPipesComponent },
  { path: 'template-driven-forms', component: TemplateDrivenFormComponent },
  { path: 'reactive-forms', component: ReactiveFormComponent },
  { path: 'crud-app', component: CurdComponent },
  { path: 'crud/create', component: CurdFormComponent },
  { path: 'resource', component: ResourceApiComponent },
  {
    path: 'crud/:id/view',
    component: CurdFormComponent,
    data: { mode: 'view' },
  },
  {
    path: 'crud/:id/edit',
    component: CurdFormComponent,
    data: { mode: 'edit' },
  },
  { path: '**', component: PageNotFoundComponent }, // wildcard route, matches any URL that hasn't been matched by previous routes
];

/**
 * pathMatch: 'prefix'

Example:

{
  path: 'admin',
  component: AdminComponent,
  pathMatch: 'prefix'
}

Matches:

/admin
/admin/settings
/admin/users

because URL STARTS with admin
 */

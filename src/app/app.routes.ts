import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { DirectivesComponent } from './directives/directives.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BuildInPipesComponent } from './build-in-pipes/build-in-pipes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' }, // redirects ONLY when URL is EXACTLY empty
  { path: 'user', component: UserComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'attribute-directives', component: AttributeDirectivesComponent },
  { path: 'build-in-pipes', component: BuildInPipesComponent },
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

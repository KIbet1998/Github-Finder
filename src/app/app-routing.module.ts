import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubFormComponent } from './github-form/github-form.component';
import { GithubResultsComponent } from './github-results/github-results.component';

const routes: Routes = [
  {path: 'github-form', component: GithubFormComponent },
  {path: 'github-results', component: GithubResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailComponent } from './components/tutorial-detail/tutorial-detail.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailComponent },
  { path: 'add', component: AddTutorialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

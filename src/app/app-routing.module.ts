import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutePath } from './app.router.enum';

const routes: Routes = [
  { path: AppRoutePath.MANAGE, loadChildren: './components/manage/manage.module#ManageModule' },
  { path: AppRoutePath.REQUESTS, loadChildren: './components/requests/requests.module#RequestsModule' },
  { path: AppRoutePath.REVIEW, redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

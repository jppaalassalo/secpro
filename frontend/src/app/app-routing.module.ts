import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  { path: 'home', component: HomeModule },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

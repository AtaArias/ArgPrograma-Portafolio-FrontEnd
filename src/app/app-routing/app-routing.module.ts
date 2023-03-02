import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { LogInPageComponent } from '../components/log-in-page/log-in-page.component';
import { PortofolioComponent } from '../components/portofolio/portofolio.component';

const routes: Routes = [
  {path:"logIn", component:LogInPageComponent},
  {path:"portofolio", component: PortofolioComponent},
  {path:"", redirectTo:"/portofolio", pathMatch: "full"}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

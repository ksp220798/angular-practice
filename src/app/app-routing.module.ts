import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyfirstComponentComponent } from './myfirst-component/myfirst-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
const routes: Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  { path: 'home', component: MyfirstComponentComponent },
  { path: 'about', component: AboutComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

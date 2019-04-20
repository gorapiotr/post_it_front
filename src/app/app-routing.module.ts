import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PanelLayoutComponent} from "./layout/panel-layout/panel-layout.component";
import {DashboardComponent} from "./panel/dashboard/dashboard.component";
import {TagsComponent} from "./panel/tags/tags.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: '', component: PanelLayoutComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'tags', component: TagsComponent}
    ]
  }
  // {path:'**', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

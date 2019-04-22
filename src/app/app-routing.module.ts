import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PanelLayoutComponent} from "./layout/panel-layout/panel-layout.component";
import {DashboardComponent} from "./panel/dashboard/dashboard.component";
import {TagsComponent} from "./panel/tags/tags.component";
import {AuthGuard} from "./guards/auth.guard";
import {NewNoteComponent} from "./panel/new-note/new-note.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: '', component: PanelLayoutComponent, children: [
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'tags', component: TagsComponent, canActivate: [AuthGuard]},
      {path: 'new-note', component: NewNoteComponent, canActivate: [AuthGuard]}
    ]
  },
  {path:'**', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

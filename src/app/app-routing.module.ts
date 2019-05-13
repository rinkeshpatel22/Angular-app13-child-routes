import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {
    path: 'admin',
      children: 
      [
        {path: '', component:AdminComponent},
        {path: 'dashboard', component:DashboardComponent},
        {path: 'manage-users', component:ManageUsersComponent},
        {path: 'manage-employees', component:ManageEmployeesComponent}
      ],
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

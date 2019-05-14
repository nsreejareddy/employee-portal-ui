import { ListEmployeeComponent } from './list-employee/list-employee.component';
import {LoginComponent} from "./login/login.component";
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', component : LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'list-employee', component: ListEmployeeComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
];

export const routing = RouterModule.forRoot(routes);

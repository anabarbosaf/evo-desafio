import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

const routes: Routes = [{
  path: 'employee', component: EmployeeComponent},
  {path: 'department', component: DepartmentComponent},
  { path: 'departments/:departmentId/employees', component: EmployeesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

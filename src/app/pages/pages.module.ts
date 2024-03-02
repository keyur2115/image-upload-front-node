import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { SharedModuleModule } from '../shared-module/shared-module.module'


@NgModule({
  declarations: [
    DashboardComponent,
    StudentComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModuleModule
  ]
})
export class PagesModule { }

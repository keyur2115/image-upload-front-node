import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { LayoutComponent } from '../main-layout/layout/layout.component';

const routes: Routes = [
    {
      path:'',
      component:LayoutComponent,
      children:[
      {path:'dashboard', component: DashboardComponent},
      {path:'student', component: StudentComponent},
      {path:'student-form', component:StudentFormComponent},
      {path:'', redirectTo:'dashboard', pathMatch:'full'}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

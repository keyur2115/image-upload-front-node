import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
declare let $:any;

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  studentData:any = [];
  labelKey:string = "";

  constructor(private api : ApiService,
              private router: Router,
              public gs: GlobalService){}

  ngOnInit():void {
    this.getStudentData();
  }


  removeStudent(id:number, idx:number){
    this.api.deleteApiById('remove-student', id).then((res:any) => {
       if(res && res['status']){
         this.studentData.splice(idx,1);
       } else {
        console.log("student delete api res:", res['status'])
       }
    })
  }

  getStudentData(){
    this.api.getApi().then((res:any) => {
      // console.log(res);
      this.studentData = res.data;
    })
  }

  updateStudent(student:any){
      this.router.navigate(['/pages/student-form/'], {queryParams: {id: student._id}});
  }
}

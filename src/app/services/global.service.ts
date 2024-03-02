import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
 imageUrl:string = "http://localhost:8000/api/v1/uploads/students/";
 mulImgUrl: string = "http://localhost:8000/api/v1/uploads/multiple/"

 electiveSubject:any = [
    "Computer Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology"
  ]
  
  technology:any = [
    {name:"HTML", isChecked:false},
    {name:"CSS", isChecked:false},
    {name:"JavaScript", isChecked:false},
    {name:"Java", isChecked:false},
    {name:"C", isChecked:false},
    {name:"Python", isChecked:false},
    {name:"Ruby", isChecked:false},
    {name:"Swift", isChecked:false}
  ]


  constructor() { }



}

import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { ApiService } from '../../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  @ViewChild('studentForm') studentForm:any;
  updateId:number = 0;
  isCheckedValues:any = {};
  selectedImage:any = {};
  imageSrc:any = "";
  files: any = [];

  studentFormObj:any = {
    firstname:'',
    lastname:'',
    gender:'',
    class:'',
    electiveSubject:'',
    technology:[],
    goalInLife:'',
    image:'',
    multiImage: []
  }

  configSummer:any = {
    placeholder: 'write brief about your ambition',
    tabsize: 2,
    height: '200px',
    uploadImagePath: '/api/upload',
    toolbar: [
        ['misc', ['codeview', 'undo', 'redo']],
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
        ['fontsize', ['fontname', 'fontsize', 'color']],
        ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
        ['insert', ['table', 'picture', 'link', 'video', 'hr']]
    ],
    fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
  }
  
  constructor(
    public gs: GlobalService, 
    public api:ApiService, 
    public router:Router,
    private activatedRoute: ActivatedRoute
    ){}

  ngOnInit():void {
    this.activatedRoute.queryParams.subscribe(params => {
        this.updateId = params['id'];
    });

    if(this.updateId){
      this.getStudentById();
    }

  }


  changeTech(event:any, item:any){
    let index = this.studentFormObj.technology.indexOf(item.name);

    if(event.target.checked){
      if(index == -1){
        this.studentFormObj.technology.push(item.name);
      }
    } else {
      if(index != -1){
        this.studentFormObj.technology.splice(index, 1);
      }
    }

  }

  // Method to initialize checkbox states for adding
  // initializeCheckboxStateForAdd(): void {
  //   this.isCheckedValues = {}; // Reset the isCheckedValues object
  //   // Set all checkboxes to unchecked
  //   this.gs.technology.forEach((tech:any) => this.isCheckedValues[tech.name] = false);
  // }

  // Method to update checkbox states for editing
  updateCheckboxStateForEdit(): void {
    this.isCheckedValues = {}; 
    this.gs.technology.forEach((tech:any) => this.isCheckedValues[tech.name] = this.studentFormObj.technology.includes(tech.name));
    console.log("isCheckedValues", this.isCheckedValues)

  }

  uploadImage(event:any){
    if(event && event.target?.files[0]){
      if(
         event.target.files[0].type == "image/jpeg" || 
         event.target.files[0].type == "image/png"  ||
         event.target.files[0].type == "image/jpg" 
        ){
          
        this.selectedImage = event.target.files[0];
      console.log("this.selectedImage", this.selectedImage);

        const reader = new FileReader();
        reader.onload = (e:any) => this.imageSrc = reader.result;
        reader.readAsDataURL(this.selectedImage);

      } else {
        console.log("Only JPEG, PNG, and JPG format are allowed");
      }

    }

  }

  addStudent(){
    const formData = new FormData();
     if(this.selectedImage){
      formData.append('image', this.selectedImage);
     }
    formData.append('formObjData', JSON.stringify(this.studentFormObj));

    this.api.postApi('add-student', formData).then((res:any) => {
       if(res){
        console.log("successfully student added");
          this.router.navigate(['/pages/student']);
       }
    })
  }

  getStudentById(){
    this.api.getApiById(this.updateId).then((res:any) => {
      if(res && res['status']){
       this.studentFormObj = res.data;
       this.updateCheckboxStateForEdit();
      } else {
        console.log("Get student by id res: ", res['status']);
      }
    })

      }

  updateStudent(){
     let formData = new FormData();
     if(this.selectedImage){
      formData.append('image', this.selectedImage);
     }

     formData.append('formObjData', JSON.stringify(this.studentFormObj ));

     this.api.updateApi('update-student', this.updateId, formData).then((res:any) => {
      if(res && res['status']){
        console.log("update api res", res.data);
        this.router.navigate(['/pages/student']);
      }
     })
  }

  // onUploadSuccess(event:any){
  //   console.log("event", event[0]);

  //   let formData = new FormData();
  //   formData.append('mulImage', event[0]);

  //   this.api.postApi('multi-image', formData).then((res:any) => {
  //     if(res && res['status']){
  //       this.studentFormObj.multiImage.push(res.image);
  //     }
  //   })
  // }

onSelect(event:any) {
  console.log("event", event.addedFiles[0]);
  let formData = new FormData();
  formData.append('mulImage', event.addedFiles[0]);

  this.api.postApi('multi-image', formData).then((res:any) => {
    if(res && res['status']){
      this.studentFormObj.multiImage.push(res.image);
      // this.files.push(res.image);
    }
  })

}

onRemove(event:any) {
  console.log(event);
  this.studentFormObj.multiImage.splice(this.files.indexOf(event), 1);
}

}

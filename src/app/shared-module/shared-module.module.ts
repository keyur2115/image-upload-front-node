import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSummernoteModule } from 'ngx-summernote';
import { HttpClientModule } from '@angular/common/http';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgxDropzoneModule } from 'ngx-dropzone';

// const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
//  // Change this to your upload POST address:
//   url: 'https://httpbin.org/post',
//   maxFilesize: 50,
//   acceptedFiles: 'image/*'
// };


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgxSummernoteModule, 
    HttpClientModule,
    // DropzoneModule,
    NgxDropzoneModule
  ],
  exports:[
    FormsModule,
    NgxSummernoteModule, 
    HttpClientModule,
    // DropzoneModule,
    NgxDropzoneModule
  ],
  
  providers: [
    // {
    //   provide: DROPZONE_CONFIG,
    //   useValue: DEFAULT_DROPZONE_CONFIG
    // }
  ]

})
export class SharedModuleModule { }

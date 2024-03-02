import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://localhost:8000/api/v1/"
  constructor(private http: HttpClient) { }

  getApi(){
    return new Promise((resolve, reject) => {
      return this.http.get(this.url).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }

  getApiById(id:any){
    return new Promise((resolve, reject) => {
      return this.http.get(this.url+id).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }

  postApi(endPoint:any, data:any){
    return new Promise((resolve, reject) => {
      return this.http.post(this.url+endPoint, data).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }

  deleteApiById(endPoint:any, id:any){
     return new Promise((resolve, reject) => {
       return this.http.delete(`${this.url}${endPoint}/${id}`).subscribe((res) => {
         resolve(res);
       }, (err) => {
         reject(err);
       })
     })
  }

  deleteAll(endPoint:any, id:any){
     return new Promise((resolve, reject) => {
       return this.http.delete(this.url+endPoint).subscribe((res) => {
         resolve(res);
       }, (err) => {
         reject(err);
       })
     })
  }

  updateApi(endPoint:any, id:any, data:any){
     return new Promise((resolve, reject) => {
       return this.http.patch(`${this.url}${endPoint}/${id}`, data).subscribe((res) => {
         resolve(res);
       }, (err) => {
         reject(err);
       })
     })
  }

}

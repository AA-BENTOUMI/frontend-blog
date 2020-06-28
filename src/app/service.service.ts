import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

 
  baseURl = "http://localhost:3000"
  regis(data) {
    const url = `${this.baseURl}/users/register`
    console.log(data)
    return this.http.post(url,data);
  }
  
  login(data) {
    const url = `${this.baseURl}/users/login`
    console.log(data)
    return this.http.post(url,data);
  }
  ADD(data) {
    const url = `${this.baseURl}/todos/addblog`
    console.log(data)
    return this.http.post(url,data);
  }
  upload(data,id){
    const url = `${this.baseURl}/img/${id}`;
    return this.http.post(url,data);
  }
  isloged(){
    return !! localStorage.getItem('token');
   }
   logout(){
    localStorage.removeItem('token')
  }
  getData(){
    const url = `${this.baseURl}/todos/getall`;
     return this.http.get(url); 
  }
delete(id){
  const url = `${this.baseURl}/todos/deleteone/${id}`;
  return this.http.delete(url);  
}
update(id,data){
  const url = `${this.baseURl}/todos/updateone/${id}`;
  return this.http.put(url,data);  
}
}

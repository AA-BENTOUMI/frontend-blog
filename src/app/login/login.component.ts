import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../Service.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token;
  constructor(private _serviceService: ServiceService ,private routes: Router) { 
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token')
      
    }
  }
  loginForm : any ;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
    });
  }

  log(){
    this._serviceService.login(this.loginForm.value).subscribe(res=>{
      console.log(res)
      this.routes.navigateByUrl('/addblog');
      this.token=res;
      localStorage.setItem('token',this.token.token)
     
    }) 
   }
}

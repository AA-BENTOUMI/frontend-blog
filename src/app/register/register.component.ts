import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../Service.Service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _serviceService: ServiceService ,private routes: Router) { }
  registerForm : any ;
  ngOnInit(): void {

    this.registerForm = new FormGroup({
    
      Firstname : new FormControl('', [Validators.required]),
      LastName : new FormControl('', [Validators.required]),
      Address : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
    });
 }
 registe(){
  this._serviceService.regis(this.registerForm.value).subscribe(res=>{
    console.log(res)
    this.routes.navigateByUrl('/login');
  }) 
 }
}
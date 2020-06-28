import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service.Service';
import { ActivatedRoute ,Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _serviceService: ServiceService ,private routes: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this._serviceService.logout();
    this.routes.navigateByUrl('/login')
   }
  // 
}

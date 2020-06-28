import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../Service.Service';
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _serviceService: ServiceService ,private routes: Router) { 
    
  }
table;
  ngOnInit(): void {
    this.getblos()
  }
        getblos(){
      this._serviceService.getData().subscribe(data =>{
        console.log(data)
        this.table=data;
      });
    }
    deleteblog(i){
      this._serviceService.delete(this.table[i].id).subscribe(res=>{
        console.log(res)
      });
      this.table.splice(i,1);
    }

}

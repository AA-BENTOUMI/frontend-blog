import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../Service.Service';
@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
   preview: string;
   data: FormData;

  constructor(private _serviceService: ServiceService ,private routes: Router) {
    this.data=new FormData();
   }
  addblog : FormGroup ;
  file:File;
  ngOnInit(): void {
    this.addblog = new FormGroup({
      titre : new FormControl('', [Validators.required]),
      article : new FormControl('', [Validators.required]),
    });
  }
  private selectedFile: File;
  onFileChange(event) {
    if (event.target.files && event.target.files.length){
    this.file = event.target.files[0];
  }
  }
  Adding(){
    this._serviceService.ADD(this.addblog.value).subscribe((res:any)=>{
      this.upload(res._id)
      console.log(res)
    }) 
   }
   upload(id){
     this.data.set('file',this.file);
     console.log(this.data.get('file'));
     this._serviceService.upload(this.data,id).subscribe(res=>{
       console.log(res);      
     })    
     }  
}

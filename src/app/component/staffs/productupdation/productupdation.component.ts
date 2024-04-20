import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffserviceService } from 'src/app/services/staffservice.service';

@Component({
  selector: 'app-productupdation',
  templateUrl: './productupdation.component.html',
  styleUrls: ['./productupdation.component.css']
})
export class ProductupdationComponent implements OnInit{

  profileopen:boolean=true;
  staffproductlist: any;
  get: any;

  constructor(public router:Router,public staffservice:StaffserviceService){}
  ngOnInit(): void {
   if (!localStorage.getItem('productupdation')) {
      this.router.navigateByUrl('productregistration');
    }
    this.profile();
this.getAllProduct();
  }





  

  getAllProduct(){
    this.staffservice.getproducts().subscribe((res:any)=>{
      
      console.log(res);
      
      console.log(res.rows.map((r:any)=>
        
        console.log(r.value.data),
      ));
      // this.staffproductlist=res.rows.map((r:any)=>r.value.data)


    })
          }
profile(){
  this.profileopen=!this.profileopen;
      
  if(localStorage.getItem('productupdation ')) {
    this.router.navigateByUrl('productupdation');
   }
}

Home() {
  localStorage.removeItem('productregistration');
  this.router.navigateByUrl('staffdashboard');
    }

    productregistration(){
      localStorage.removeItem('productupdation')
      this.router.navigateByUrl('productregistration')
    }
  





}

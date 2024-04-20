import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
returnArray:any;
profileopen:boolean=true;


constructor(public router:Router,public adminservice:AdminserviceService){}




  ngOnInit(): void {
  
    if(localStorage.getItem('staffregister')) {
      this.router.navigateByUrl('staffregister');
     }
if(localStorage.getItem('staffupdate')){
  this.router.navigateByUrl('staffupdation')
}

    if (!localStorage.getItem('admin')) {
      this.router.navigateByUrl('');
      // Swal.fire("unauthorized user", "", "warning");
    }
    this.read()
    this.profile();

  }

  read(){
    this.adminservice.read().subscribe((res: any)=>{;
      
this.returnArray=res.rows.map((item:any)=>{
  return item.key.data
})

console.log(this.returnArray)
for(let i of this.returnArray){
  console.log(i.name)
}
// const employeelocalstorage=localStorage.getItem("employeelist");
// if(employeelocalstorage!==null){
//   this.userdata=JSON.parse(employeelocalstorage);

// }
// this.employeephone=this.userdata.data.employeenumber;
// this.employeephoneform.patchvalue(this.userdata);
    });
  }

  profile(){
    this.profileopen=!this.profileopen;
    
  
    //  if(localStorage.getItem('a')) {
    //   this.router.navigateByUrl('staffanalysis');
    //  }
    //  this.checkUserExistence();
  
  
  }

  logout(){
    localStorage.removeItem('admin');
    this.router.navigateByUrl('');
  }

  admindashboard(){
    // this.router.navigateByUrl('/admindashboard')
  }
  
staffregister(){
  localStorage.setItem("staffregister","staffregistration")
  this.router.navigateByUrl('/staffregister')
}
staffupdation(){
  localStorage.setItem("staffupdate","staffupdate")
  this.router.navigateByUrl("/staffupdation")
}


}

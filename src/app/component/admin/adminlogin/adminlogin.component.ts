import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FaceapiServiceService } from 'src/app/services/faceapi-service.service';
import { v4 as uuidv4 } from 'uuid';
import { FormBuilder, FormControl, FormGroup,Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  video!:HTMLVideoElement
  errorDiv!:HTMLDivElement
  flag:string='notScanned'
  results:any;

  scan:boolean=false;

  // adminId: string="";
  // password: string="";

  showErroradminId: boolean = false;
  showErrorpassword: boolean = false;
  showErrorinvalid: boolean=false;
  showError:string='';

  showon:boolean=false;

adminlogin!:FormGroup
  adminId: string="";
  password: string="";

  constructor(private render:Renderer2,private faceApi:FaceapiServiceService,public router: Router,public fb:FormBuilder, private title:Title) { }



  ngOnInit(): void {

    this.adminlogin=this.fb.group({
      adminId:['',[Validators.required,Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')]],
      adminpassword:['',[
        Validators.required,
        Validators.minLength(8),
      ], 
      this.customPasswordValidator
    ]
    })
    this.title.setTitle('adminlogin');
    if (localStorage.getItem('admin')) {
      this.router.navigateByUrl('/admindashboard');
    }
  }


  customPasswordValidator(control: FormControl): { [key: string]: boolean } | null {
    // Implement custom validation logic here (e.g., check for uppercase, lowercase, numbers, special characters)
    const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(control.value);
    return valid ? null : { 'invalidPassword': true };
  }


eye(){
   this.showon=!this.showon;

}



  onSubmit() {

    if(this.adminlogin && this.adminlogin.valid){
console.log(this.adminlogin.value.adminId);

    }
    // this.validation();
  
  }


// validation(){
//   if(this.adminlogin.value.adminId===""){
//     console.log("enter adminlogin");
    
//   } else
//   if(this.adminlogin.value.adminpassword===""){
//     console.log("enter password"); 
//   }
// }

  validation(){
    this.showErroradminId=true;
    this.showErrorpassword=true;

if(this.adminId==="" && this.password===""){
this.showErroradminId=true;
this.showErrorpassword=true;
console.log("enter ID/password");
this.showError="enter ID/Password"
}else
if(this.adminId==="admin123" && this.password===""  ){
  this.showErroradminId=false;
  this.showError="enter password"
}
else if(this.adminId==="" && this.password==="admin"  ){
  this.showErrorpassword=false;
  this.showError="enter admin"
}else
if(this.adminId!=="admin123" && this.password=="admin"){
this.showError="Wrong ID"
this.showErrorpassword=false  
}else if(this.adminId=="admin123" && this.password!=="admin"){
this.showError="Wrong password"
this.showErroradminId=false  
}else 
if(this.adminId=="" && this.password!=="admin"){
  this.showErroradminId=false;
  this.showError="wrong password"
}else if(this.adminId!=="admin123" && this.password===""){
  this.showErrorpassword=false;
  this.showError="wrong ID"
}
else 

if(this.adminId!=="admin123" && this.password!=="admin") {
  this.showError="wrong ID/Password"
} else


if (this.adminId === "admin123" && this.password === "admin") {
  console.log(this.adminId);
 
  localStorage.setItem('admin', this.adminId);
  this.router.navigateByUrl('/admindashboard');
}

    
  }
  cleardata(){
    this.adminId="";
    this.password="";

  }

 





}


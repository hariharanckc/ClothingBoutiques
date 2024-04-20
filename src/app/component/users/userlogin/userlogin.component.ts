import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { SignupService } from 'src/app/services/signup.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  showErrorPhnNO: boolean =false;
  showError: boolean=false;
  phoneNumber!: any;
  password: any;
  showeye: boolean = false;


  constructor(public router: Router,private renderer: Renderer2,private signup:SignupService,private title:Title) { }

  // ngAfterViewInit(): void {
  //   this.addGoogleSignInScript();
  // }

  // private addGoogleSignInScript(): void {
  //   const script = this.renderer.createElement('script');
  //   script.src = 'https://accounts.google.com/gsi/client';
  //   script.async = true;
  //   this.renderer.appendChild(document.head, script);
  // }


  ngOnInit(): void { 
    this.title.setTitle("ClothingBoutiques -|- Login");

    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('userdashboard');
      Swal.fire("Click Logout Button", "", "warning",);
    }
  
}

eye(){
this.showeye=!this.showeye; 
}
  

 inviteFacebook() {
  // const textToShare = 'foodMaintanance project link: https://nproject-190cc.web.app/';
  // const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(textToShare)}`;
  // window.open(facebookUrl, '_blank');  
  Swal.fire("Now The Service Is Not Available", "", "error");

}


 inviteInstagram() {
  // const textToShare = 'foodMaintanance project link: https://nproject-190cc.web.app/';
  // const instagramUrl = `https://www.instagram.com/share?url=${encodeURIComponent(textToShare)}`;
  // window.open(instagramUrl, '_blank');
  Swal.fire("Now The Service Is Not Available", "", "error");

}



invitewhatsapp(){
  // const textToShare = 'foodMaintanance project link: https://nproject-190cc.web.app/';
  // const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(textToShare)}`;
  // window.open(whatsappUrl, '_blank');
  Swal.fire("Now The Service Is Not Available", "", "error");


}

// https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap

login() {
  this.signup.checkExistingUser(this.phoneNumber).subscribe((users: any) => {
    console.log(users.rows);
    if (users.rows.length === 1) {
      const decryptedPassword = CryptoJS.AES.decrypt(users.rows[0].value.data.password , 'secret key').toString(CryptoJS.enc.Utf8);
      // if (users.rows[0].value.data.password === this.password) {
        if (decryptedPassword === this.password) {
        // console.log('Authentication successful');
        localStorage.setItem('token', this.phoneNumber);
        this.clearData();
    Swal.fire("Login Successfull", "", "success");
        this.router.navigateByUrl('userdashboard');
      } else {
        console.log('Incorrect password');
        this.password = "";
        this.showError = true;
      }
    } else {
      console.log('User not found');
      this.clearData();
    }
  });
}

clearData(){
  this.phoneNumber="";
  this.password="";
}


validation() {
  // Reset error flags initially
  this.showErrorPhnNO = false;
  this.showError = false;

  // Define a regular expression pattern for 10 digits
  const phoneNumberPattern = /^[0-9]{10}$/;

  if (this.phoneNumber == null || !phoneNumberPattern.test(this.phoneNumber)) {
    this.showErrorPhnNO = true;
  }

  if (!this.password) {
    this.showError = true;
  }

  if (this.phoneNumber && this.password && phoneNumberPattern.test(this.phoneNumber)) {
    this.showErrorPhnNO = false;
    this.showError = false;
    this.login();
  }
}

oauth(){
  this.router.navigateByUrl('/oauth');
  }

}

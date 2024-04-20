import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SignupService } from 'src/app/services/signup.service';
import { Title } from '@angular/platform-browser';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userName!: string;
  phoneNumber!: string;
  password!: string;
  addItemForm!: FormGroup;
  showErrorUserName: boolean = false;
  showErrorPhnNO: boolean = false;
  showError: boolean = false;
  showeye: boolean = false;

  private unsubscribe$ = new Subject<void>();



  constructor(
    // private db: AngularFireDatabase,
    private fb: FormBuilder,
    private router: Router,
    private signupservice: SignupService,
    private title: Title) { }
  ngOnInit(): void {
    this.title.setTitle("ClothingBoutiques -|- signup");

    if (localStorage.getItem("token")) {
      this.router.navigateByUrl("userdashboard")
    }

    this.addItemForm = this.fb.group({
      userName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  eye() {
    this.showeye = !this.showeye;
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



  invitewhatsapp() {
    // const textToShare = 'foodMaintanance project link: https://nproject-190cc.web.app/';
    // const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(textToShare)}`;
    // window.open(whatsappUrl, '_blank');
    Swal.fire("Now The Service Is Not Available", "", "error");


  }


  onSubmit() {
    const encryptedPassword = CryptoJS.AES.encrypt(this.password, 'secret key').toString();
    const couchstructure = {
      _id: "signup_2_" + uuidv4(),
      data: {
        name: this.userName,
        Phone: this.phoneNumber,
        password:encryptedPassword,
        type: "signup"
      }
    }
    localStorage.setItem('token', this.phoneNumber);

    console.log(couchstructure);

    this.signupservice.create(couchstructure).subscribe(res=>{
      console.log(res);

    })

    Swal.fire("signup Successfull", "", "success");
    this.router.navigateByUrl("userdashboard");
  }


  // checkUserExistence() {
  //   const usersRef = this.db.list('users', (ref) =>
  //     ref.orderByChild('phoneNumber').equalTo(this.phoneNumber)
  //   );
  //   const users$: Observable<any[]> = usersRef.valueChanges();
  //   users$
  //     .pipe(takeUntil(this.unsubscribe$))
  //     .subscribe((users) => {
  //       if (users.length > 0) {
  //         this.phoneNumber = '';
  //         this.showErrorPhnNO = true;
  //       } else {
  //         console.log('User does not exist');
  //         this.onSubmit();
  //       }
  //     });
  // }


  checkUserExistence(){

    this.signupservice.checkExistingUser(this.phoneNumber).subscribe((res:any)=>{
      console.log(res);
      if(res.rows.length!-0){
        console.log("phone number exists");
        
      }else{
        console.log("user does not exists");
        
      this.onSubmit();

      }

      
      
    })
  }


  validation() {

    this.showErrorUserName = false;
    this.showErrorPhnNO = false;
    this.showError = false;

    const phoneNumberPattern = /^[0-9]{10}$/;

    if (this.userName == null) {
      this.showErrorUserName = true;
    }

    if (this.phoneNumber == null || !phoneNumberPattern.test(this.phoneNumber)) {
      this.showErrorPhnNO = true;
    }

    if (!this.password) {
      this.showError = true;
    }
    if (this.userName && this.phoneNumber && this.password && phoneNumberPattern.test(this.phoneNumber)) {
      this.showErrorUserName = false;
      this.showErrorPhnNO = false;
      this.showError = false;
      this.checkUserExistence();
      // this.onSubmit();
    }
  }




}

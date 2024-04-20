import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { Observable, Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-stafflogin',
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.css']
})
export class StaffloginComponent implements OnInit {


  Phone: string = '';
  SID: string = '';

  showError: string = '';
  private unsubscribe$ = new Subject<void>();
  loggedUser!: any;



  constructor(public router: Router, private title: Title) { }





  onsubmit() {
    this.router.navigateByUrl("staffdashboard")

    // this.validation();
  }

  validation() {
    if (this.SID === "" && this.Phone === "") {
      this.showError = "pls enter SID/Phone"
    } else if(this.SID===""){
      this.showError="pls enter SID"
    } else if(this.Phone===""){
      this.showError="pls enter phone No"
    }else
    if (this.SID != "" && this.Phone === "") {
      this.showError = "please enter Phone No"
    } else     if (this.SID === "" && this.Phone != "") {
        this.showError = "pls enter SID"
     }  else if(this.SID!){
this.showError="wrong SID"
     }else if(this.Phone!){
      this.showError="wrong phone No"

     }
     else   if (this.Phone != "" && this.SID != "") {
        this.showError = "Wrong SID/phone No";
      } else
        if (this.Phone && this.SID) {
          // this.checkUserExistence();
          // localStorage.setItem('staff',this.SID && this.Phone);


        }else{
          
        }
  }


  // checkUserExistence() {
  //   const usersRef = this.db.list('newstaffs', (ref) =>
  //     ref.orderByChild('Phone').equalTo(this.Phone)
  //   );
  //   const users$: Observable<any[]> = usersRef.valueChanges();

  //   users$
  //     .pipe(takeUntil(this.unsubscribe$))
  //     .subscribe((users) => {
  //       if (users.length > 0) {
  //         const foundUser = users.find(user => user.SID === this.SID);
  //         console.log(users);
  //         this.loggedUser = users[0]

  //         if (foundUser) {
  //           const user = foundUser;
  //           console.log(user)


  //           this.Phone = '';
  //           this.SID = '';
  //     localStorage.setItem('staff', user.Phone);

  //           this.router.navigateByUrl('/staffdashboard');
  //     Swal.fire("Login SuccessFully", "", "success");

  //         } else {
  //           console.log('Invalid password');
  //           this.showError = "Invalid Password";
  //         }
  //       } else {
  //         console.log('User does not exist');
  //         this.showError = "Invalid SID";
  //       }
  //     });
  // }


  // performLogin() {
  //   const loginData: stafffield = { Phone: this.Phone, SID: this.SID };

  //   this.enrollnewstaff.getItems().subscribe(data => {
  //     (users: stafffield[]) => {
  //       const foundUser = users.find(user => user.Phone === loginData.Phone && user.SID === loginData.SID);
  //       if (foundUser) {
  //         console.log(data)
  //         this.router.navigate(['/staffdashboard']);
  //         localStorage.setItem('staff', this.Phone);
  //       } else {
  //         this.showError = "Invalid User!";
  //       }
  //     }
  // });
  // }

  ngOnInit(): void {
    this.title.setTitle('stafflogin');
    if (localStorage.getItem('staff')) {
      this.router.navigateByUrl('\staffdashboard');


    }
  }

}
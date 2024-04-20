import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
constructor(public router:Router){}
  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('');
      // Swal.fire("unauthorizeduser", "", "warning");
    }
}



  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }
  
}

import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  showSplash = true;
  optionopen:boolean=false;

  constructor(private router: Router,private title:Title) { }

  ngOnInit(): void {

    this.title.setTitle('main');

    setTimeout(() => {
      this.showSplash = false;
    }, 2000);

    this.title.setTitle("ClothingBoutiques");

    if(localStorage.getItem('token')) {
     this.router.navigateByUrl('userdashboard');
    }
    if(localStorage.getItem('admin')) {
     this.router.navigateByUrl('admindashboard');
    }
    if(localStorage.getItem('staff')) {
     this.router.navigateByUrl('staffdashboard');
    }
    }
    handleButtonTouchUp() {
     console.log('Button touched up!');
     // Add your custom logic here
   }
  
loginoptions(){
  this.optionopen=!this.optionopen;
}

}

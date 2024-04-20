import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { StaffserviceService } from 'src/app/services/staffservice.service';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-productregistration',
  templateUrl: './productregistration.component.html',
  styleUrls: ['./productregistration.component.css']
})
export class ProductregistrationComponent implements OnInit{




  menuopen:boolean=true;
  showsplash:boolean=true;
  profileopen:boolean=true;
  
  // Name: string = 'ljlkj';
  // Phone: string = ''; 
  //  SID: string = '';
  
  showError: string = '';
  // private unsubscribe$ = new Subject<void>();
  
  
  images: string[] = [
    '/assets/images/foodlogo.png',
    '/assets/images/foodbanner1.jpg',
    '/assets/images/googlelogo.png',
  
  
  ];
  activeIndex: number = 0;
    isPopupVisible1: boolean=false;
    isPopupVisible2: boolean=false;
    isPopupVisible3: boolean=false;
    isPopupVisible4: boolean=false;
    private isDragging = false;
    private startX!: number;
 
    imageURL:string="";
    Pname: string="";
    OriginalPrice!: number;
    Offer!:number;
    Stock!:number;

    productcreation!:FormGroup
  staffproductlist: any;
  showerror: string="";
  constructor(public router:Router,public fb:FormBuilder,public staffservice:StaffserviceService){}
  
  // tabledata: any[]=[];

  
  
  ngOnInit(): void {
    if (!localStorage.getItem('productregistration')) {
      this.router.navigateByUrl('staffdashboard');
    }
    if(localStorage.getItem('productupdation')) {
      this.router.navigateByUrl('productupdation');
     }

this.productcreation=this.fb.group({
  imageURL: ['', ],
  Pname: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')]],
  OriginalPrice: ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
  Offer: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
  Stock: ['', [Validators.required,Validators.pattern('^[0-9]+$')]],
  // price:['', Validators.required]
}) 
// this.getAllProduct();


    // this.phonenumber=localStorage.getItem('staff');
  // console.log(this.phonenumber)
  
  // this.Name=this.userdata.Name;
      this.splash();
      // setTimeout(() => {
      //   this.showsplash = false;
      // },1000);
  this.profile();
  // this.getuserdata();
  
   
        // Swal.fire("unauthorized user", "", "warning");
    
    }
    calculation(){
      // console.log(this.OriginalPrice);
      
      this.productcreation.value.Price=Math.floor(this.productcreation.value.OriginalPrice*this.productcreation.value.Offer/100);
      console.log(this.productcreation.value.Price);
      
    }
    

    submit(){
      console.log('works');
      
      if (this.productcreation && this.productcreation.value) {
        console.log('Form submitted:', this.productcreation.value);
        const couchstructure = {
          _id: "ProductCreation_2_" + uuidv4(),
          data: {
            imageURL:this.productcreation.value.imageURL,
            Pname:this.productcreation.value.Pname,
            OriginalPrice: this.productcreation.value.OriginalPrice,
            Offer:this.productcreation.value.Offer,
            Stock:this.productcreation.value.Stock,
            Price:this.productcreation.value.Price,
            type: "ProductCreation"
          }
        }
        console.log(couchstructure);
        this.staffservice.create(couchstructure).subscribe(res=>{
          console.log(res);
          // Swal.fire('success!', 'New Staff Create Successfully!', 'success');

          // this.resetFormFields();
   
        })

      }
      // Swal.fire({
      //   title: 'Hello!',
      //   text: 'This is a SweetAlert dialog.',
      //   icon: 'info',
      //   confirmButtonText: 'OK'
      // });
    }

    validation(){
      if(this.productcreation.value.imageURL === ""){
        this.showerror="Enter Staffname"
        }else if(this.productcreation.value.Pname===""){
        this.showerror="Enter Mobile Number"  
        }else if(this.productcreation.value.OriginalPrice===""){
        this.showerror="Enter Salary"  
        }else if(this.productcreation.value.Offer===""){
        this.showerror="click Gender"  
        }else if(this.productcreation.value.Stock===""){
        this.showerror="Select Section"  
        }else 
          if(this.productcreation.value.imageURL&&this.productcreation.value.Pname&&this.productcreation.value.OriginalPrice&&this.productcreation.value.Offer&&this.productcreation.value.Stock  ){
            Swal.fire('success!', 'New Staff Create Successfully!', 'success');
            this.submit();
          //  this.resetFormFields();
         }

    }

//       getAllProduct(){
// this.staffservice.read().subscribe((res:any)=>{
//   console.log(res);
//   this.staffproductlist=res.rows.map( (item:any) =>{
//     return item.key.data
//   })

//   console.log(this.staffproductlist);
  
  
  
// })
//       }
  // logout(){
  //     localStorage.removeItem('staff');
  //     this.router.navigateByUrl('');
  //   }
  Home() {
    localStorage.removeItem('productregistration');
    this.router.navigateByUrl('staffdashboard');
      }
      
      productupdation(){
        localStorage.setItem("productupdation","productupdation");
        this.router.navigateByUrl("productupdation")
      }
    
    
    
    // getuserdata() {
    //   this.newstaffs.getUserDataByPhoneNumber(this.phonenumber).subscribe(res => {
    //     console.log(res);
    //     const data: any = res[0];
    //     console.log(data);
    //     this.staffDatas = [data]; // Assuming you want to assign the fetched data to staffDatas
    //     console.log(this.staffDatas); 
    //     localStorage.setItem('staffData', JSON.stringify(this.staffDatas));
    
    //     // You can directly access staffDatas without retrieving from local storage again
    //     if (this.staffDatas.length > 0) {
    //       console.log(this.staffDatas[0]);
    //     }
        
    //   });
    // }
    
    
    
      handleButtonTouchUp() {
    this.showsplash=false;
    
      }
      splash(){
    
    this.showsplash=false;
     setTimeout(() => {
          this.showsplash = true;
        },9000);
        
        this.offsplash();
    
    
      }
      offsplash(){
        
    this.showsplash=true;
    setTimeout(() => {
         this.showsplash = false;
       },5000);
      }
    
    
    
    menubar(){
      this.menuopen=!this.menuopen;
    
    }
    
    showPopup1() {
      this.isPopupVisible1=true;
      setTimeout(() => {
        this.isPopupVisible1 = false;
    
      }, 1000);
    }showPopup2() {
      this.isPopupVisible2=true;
      setTimeout(() => {
        this.isPopupVisible2 = false;
    
      }, 1000);
    }showPopup3() {
      this.isPopupVisible3=true;
      setTimeout(() => {
        this.isPopupVisible3 = false;
    
      }, 1000);
    }showPopup4() {
      this.isPopupVisible4=true;
      setTimeout(() => {
        this.isPopupVisible4 = false;
    
      }, 1000);
    }
    
    
  
    profile(){
      this.profileopen=!this.profileopen;
      
      if(localStorage.getItem('productregistration')) {
        this.router.navigateByUrl('productregistration');
       }
      //  if(localStorage.getItem('a')) {
      //   this.router.navigateByUrl('staffanalysis');
      //  }
      //  this.checkUserExistence();
  
  
    }
  
    // productregistration(){
    //   localStorage.setItem('productregistration', 'productcreate');
    //   this.router.navigateByUrl('/productregistration')
    // }
  
    // analysis(){
    //   localStorage.setItem('a', 'analysis');
    //   this.router.navigateByUrl('staffanalysis')
    // }
  
  }
  


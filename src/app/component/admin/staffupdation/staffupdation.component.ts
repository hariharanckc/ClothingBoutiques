import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResolveStart, Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-staffupdation',
  templateUrl: './staffupdation.component.html',
  styleUrls: ['./staffupdation.component.css']
})

export class StaffupdationComponent implements OnInit {


  profileopen: boolean = true;
  getallstaff: any;
  SID: string = "";
  date = new Date();
  formattedDate = this.date.toLocaleDateString('en-GB');
  categories: string[] = ["mens", "womens", "kids"];
deletepopup:boolean=false;
  EditGroup!: FormGroup;
  editdialogbox: boolean = false;
  edit_id!: string;
  edit_rev!: string;
  searchparam!: number;
  search: any;
  get: any;
  showerror: string="";
  deleteItems: any;

  constructor(public router: Router, public adminservice: AdminserviceService, public fb: FormBuilder) { }
  ngOnInit(): void {
    // this.GetSearchPhone();
    this.searchstaff();
    if (!localStorage.getItem('staffupdate')) {
      this.router.navigateByUrl('admindashboard');
    }
    if (!localStorage.getItem('staffupdate')) {
      this.router.navigateByUrl('staffregister');
    }

    this.EditGroup = this.fb.group({
      Staffname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      Snumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Ssalary: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Date: [''],
       SID: [],
      Gender: ['', Validators.required],
      Section: ['', Validators.required],


    });
    // this.updatestaff();

    this.GetAllStaff();

    this.profile();

  }

  profile() {
    this.profileopen = !this.profileopen;


    //  if(localStorage.getItem('a')) {
    //   this.router.navigateByUrl('staffanalysis');
    //  }
    //  this.checkUserExistence();


  }
  validation() {

    if (this.EditGroup.value.Staffname === "") {
      this.showerror = "Enter Staffname"
    } else if (this.EditGroup.value.Snumber === "") {
      this.showerror = "Enter Mobile Number"
    } else if (this.EditGroup.value.Ssalary === "") {
      this.showerror = "Enter Salary"
    } else if (this.EditGroup.value.Gender === "") {
      this.showerror = "click Gender"
    } else if (this.EditGroup.value.Section === "") {
      this.showerror = "Select Section"
    } else
      if (this.EditGroup.value.Staffname && this.EditGroup.value.Snumber && this.EditGroup.value.Ssalary && this.EditGroup.value.Gender && this.EditGroup.value.Section) {
        Swal.fire('success!', 'New Staff Create Successfully!', 'success');
this.updatestaff();
      }

  }
  



  editaction(data: any) {
    this.editdialogbox = true;
    this.edit_id = data._id
    this.edit_rev = data._rev
    this.EditGroup.patchValue(data.data)
  }


  edit() {
    this.editdialogbox = !this.editdialogbox
  }

  performDelete(data: any) {

    this.deleteItems = data;
// this.deletepopup=!this.deletepopup
this.deletepopup=true,

console.log(this.deleteItems);
  }

  deletecancel(){
    this.deletepopup=!this.deletepopup
  }

  deleteaction(){
    this.adminservice.delete(this.deleteItems._id, this.deleteItems._rev).subscribe((res) => {
      console.log(res);
      Swal.fire('success!', 'Staff Delete Successfully!', 'success');
      this.GetAllStaff();
      this.deletepopup=false
      
    });
    // this.deletepopupremove=!this.deletepopupremove
  }

  
  updatestaff() {
    // console.log(this.EditGroup);
    console.log(this.edit_id, this.edit_rev);

    const customformate = {
      _id: this.edit_id,
      _rev: this.edit_rev,
      data: {
        Staffname: this.EditGroup.value.Staffname,
        Snumber: this.EditGroup.value.Snumber,
        Ssalary: this.EditGroup.value.Ssalary,
        Date: this.EditGroup.value.Date,
        ID: this.EditGroup.value.ID,
        SID: this.EditGroup.value.SID,
        //  employeeId:this.EditGroup.value.employeeId,
        Gender: this.EditGroup.value.Gender,
        Section: this.EditGroup.value.Section,
        lastSID: this.EditGroup.value.lastSID,
        type: "createemployee"
      }
    }


    this.adminservice.updatstaffedit(this.edit_id, this.edit_rev, customformate).subscribe((res: any) => {
      console.log(res);
      this.GetAllStaff();
      console.log(customformate);
      this.editdialogbox = false;
    })
  }

  // GetSearchPhone() {
  //   this.adminservice.GetSearchPhone(this.searchparam).subscribe((res: any) => {
  //     console.log(res);
  //     this.getallstaff = res.rows.map((row: any) => row.value);
  //   })
  // }

  searchstaff(){
    this.adminservice.searchstaff(this.searchparam).subscribe((res:any)=>{
      console.log(res);
      
    })
  }

  home() {
    localStorage.removeItem("staffupdate")
    this.router.navigateByUrl('admindashboard')
  }
  staffregister() {

    localStorage.removeItem("staffupdate")
    this.router.navigateByUrl("staffregister")
  }
  logout() {

  }

  GetAllStaff() {
    this.adminservice.read().subscribe((res: any) => {
      console.log(res.rows)
      this.getallstaff = res.rows.map((row: any) => row.value)
      console.log(this.getallstaff);
  

    })
  }


}

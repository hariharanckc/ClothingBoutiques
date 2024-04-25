import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import Swal from 'sweetalert2';

import { v4 as uuidv4 } from 'uuid';
interface IRecentData {
  SID: string,
  ID: number
}
@Component({
  selector: 'app-staffregister',
  templateUrl: './staffregister.component.html',
  styleUrls: ['./staffregister.component.css']
})

export class StaffregisterComponent implements OnInit {
  profileopen: boolean = true;
  date = new Date();
  formattedDate = this.date.toLocaleDateString('en-GB');
  categories: string[] = ["Mens", "Womens", "Kids"]
  createEmployeeForm!: FormGroup
  selectedUser: any | null = null;
  Staffname: string = "";
  Snumber!: number;
  Ssalary!: number;
  Gender: string = ''; // Initialize Gender to an empty string
  Section!: string;
  // LastSID: string = "";
  returnArray: any;
  SID: string = "";
  // sidFromAdmin: any
  showerror: string = "";
  placeholder1: string | any = "Secect Branch ▼";
  nextSID!: string;
  sid: any;
  SIDs: string = '';



  constructor(public router: Router, public fb: FormBuilder, public adminService: AdminserviceService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('staffregister')) {
      this.router.navigateByUrl('admindashboard');
    }
    if (localStorage.getItem('staffupdate')) {
      this.router.navigateByUrl('staffupdation')
    }

    this.createEmployeeForm = this.fb.group({
      Staffname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      Snumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Ssalary: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Date: [''],
       SID: [],
      Gender: ['', Validators.required],
      Section: ['', Validators.required],
      // lastSID: [],


    });
    this.getRecentDetails();
    this.read();
    console.log(this.read());


    this.profile();
    



  }

  submit(recentData: IRecentData) {
    //this.ngOnDestroy();

    // console.log(this.sidFromAdmin)
    
    this.createEmployeeForm.value.Date = this.formattedDate;
    if (this.createEmployeeForm && this.createEmployeeForm.valid) {
      console.log('Form submitted:', this.createEmployeeForm.value);
      const couchstructure = {
        _id: "createemployee_2_" + uuidv4(),
        data: {
          Staffname: this.createEmployeeForm.value.Staffname,
          Snumber: this.createEmployeeForm.value.Snumber,
          Ssalary: this.createEmployeeForm.value.Ssalary,
          Date: this.formattedDate,
          ID: recentData.ID,
          SID: recentData.SID,
          Gender: this.createEmployeeForm.value.Gender,
          Section: this.createEmployeeForm.value.Section,
          type: "createemployee"
        }
      }
      console.log(couchstructure);
      this.adminService.create(couchstructure).subscribe(res => {
        console.log(res);
        this.resetFormFields();
        this.getRecentDetails();

    this.read();

      })

    }

  }
  validation() {
    if (this.createEmployeeForm.value.Staffname === "") {
      this.showerror = "Enter Staffname"
    } else if (this.createEmployeeForm.value.Snumber === "") {
      this.showerror = "Enter Mobile Number"
    } else if (this.createEmployeeForm.value.Ssalary === "") {
      this.showerror = "Enter Salary"
    } else if (this.createEmployeeForm.value.Gender === "") {
      this.showerror = "click Gender"
    } else if (this.createEmployeeForm.value.Section === "") {
      this.showerror = "Select Section"
    } else
      if (this.createEmployeeForm.value.Staffname && this.createEmployeeForm.value.Snumber && this.createEmployeeForm.value.Ssalary && this.createEmployeeForm.value.Gender && this.createEmployeeForm.value.Section) {
        Swal.fire('success!', 'New Staff Create Successfully!', 'success');
        this.getRecentDetails();
      }
  }

  getRecentDetails() {
    let response: IRecentData = {
      SID: "",
      ID: 0
    }
    this.adminService.read().subscribe((res: any) => {
      const date = res.rows.sort((x: { value: { data: { ID: number; }; }; }, y: { value: { data: { ID: number; }; }; }) => { return y.value.data.ID - x.value.data.ID });
      if (date.length === 0) {
        response.ID = 1;
        response.SID = `SID0001`;
      } else {
        const nextID = date[0].value.data.ID + 1;
        response.ID = nextID;
        response.SID = "SID" + nextID.toString().padStart(4, '0');
        this.SIDs = response.SID
        
      }
      this.submit(response);
    })
    return response;
  }

  read() {
    this.adminService.read().subscribe((res: any) => {
      console.log(res);
 
    })
  }

  profile() {
    this.profileopen = !this.profileopen;
  }


  resetFormFields() {
    this.createEmployeeForm.reset();
  }
  toggleDialog() {
    // this.selectedUser = this.createEmployeeForm;
    if (this.selectedUser.Gender === "male") {
      this.Gender = "Mr.";
    } else if (this.selectedUser.Gender === "female") {
      this.Gender = "Mrs.";
    }
  }





  // this.employeeId = 'EMP' + newIdNumber.toString().padStart(3, '0');



  // logout() {
  //   localStorage.removeItem('adminlogin');
  //   this.router.navigateByUrl('\adminlogin');
  // }

 

  staffupdation() {
    localStorage.setItem("staffupdate", "staffupdate")
    this.router.navigateByUrl("staffupdation")
  }
  home() {
    localStorage.removeItem("staffregister")
    this.router.navigateByUrl('admindashboard')
  }


  // logout(){
  // }
}

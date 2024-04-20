import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResolveStart, Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';


@Component({
  selector: 'app-staffupdation',
  templateUrl: './staffupdation.component.html',
  styleUrls: ['./staffupdation.component.css']
})
export class StaffupdationComponent implements OnInit{


  profileopen:boolean=true;
  getallstaff: any;
  SID: string="";
  date = new Date();
  formattedDate = this.date.toLocaleDateString('en-GB');
categories:string[]=["mens","womens","kids"]

EditGroup!:FormGroup
  editdialogbox: boolean=false;
  edit_id!: string;
  edit_rev!: string;

  constructor(public router:Router ,public adminservice:AdminserviceService,public fb:FormBuilder){}
  ngOnInit(): void {
    if (!localStorage.getItem('staffupdate')) {
      this.router.navigateByUrl('admindashboard');
    }
    if (!localStorage.getItem('staffupdate')) {
      this.router.navigateByUrl('staffregister');
    }
  
    this.EditGroup = this.fb.group({
      Staffname: [''],
      Snumber:[''],
      Ssalary:[''],
       Date:[''],
       SID: [],
       employeeId:[''],
       Gender:[''],
       Section:[''],
      lastSID: [],


    });
    this.updatestaff();

    this.GetAllStaff();

this.profile();

  }

  profile(){
    this.profileopen=!this.profileopen;


    //  if(localStorage.getItem('a')) {
    //   this.router.navigateByUrl('staffanalysis');
    //  }
    //  this.checkUserExistence();
  
  
  }
  validation(){



  }



  editaction(data:any) {
    this.editdialogbox=true;
    this.edit_id = data._id
    this.edit_rev = data._rev
    this.EditGroup.patchValue(data.data)
  }

  
  edit(){
    this.editdialogbox=!this.editdialogbox
  }

  updatestaff(){
    // console.log(this.EditGroup);
    console.log(this.edit_id,this.edit_rev );

    const customformate={
      _id:this.edit_id,
      _rev:this.edit_rev,
      data:{
        Staffname: this.EditGroup.value.Staffname,
        Snumber:this.EditGroup.value.Snumber,
        Ssalary:this.EditGroup.value.Ssalary,
         Date:this.EditGroup.value.Date,
         SID: this.EditGroup.value.SID,
        //  employeeId:this.EditGroup.value.employeeId,
         Gender:this.EditGroup.value.Gender,
         Section:this.EditGroup.value.Section,
        lastSID:this.EditGroup.value.lastSID,
        type:"createemployee"
      }
    }
    
  this.adminservice.updatstaffedit(this.edit_id,this.edit_rev,customformate).subscribe((res:any)=>{
    console.log(res);
    this.GetAllStaff();
    console.log(customformate);
  this.editdialogbox=false;


  })

    
   }

  
  home(){
    localStorage.removeItem("staffupdate")
    this.router.navigateByUrl('admindashboard')
  }
  staffregister(){

    localStorage.removeItem("staffupdate")
    this.router.navigateByUrl("staffregister")
  }
logout(){

}

GetAllStaff(){
  this.adminservice.read().subscribe((res:any) => {
    console.log(res.rows)
    this.getallstaff = res.rows.map((row:any)=> row.value)
    console.log(this.getallstaff);
    // console.log(res.rows.map((row:any)=> row.key.data));
    
    // console.log(res.rows.map((row: any) => { row.key.data }));
    // this.getallstaff = res.rows[0].map((res: any) => 
    //   res.key.value)
    
  })
}


}

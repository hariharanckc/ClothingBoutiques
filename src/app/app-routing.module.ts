import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './component/admin/admindashboard/admindashboard.component';

import { StaffloginComponent } from './component/staffs/stafflogin/stafflogin.component';
import { UserloginComponent } from './component/users/userlogin/userlogin.component';
import { UserdashboardComponent } from './component/users/userdashboard/userdashboard.component';
import { SignupService } from './services/signup.service';
import { SignupComponent } from './component/users/signup/signup.component';
import { FacescanningComponent } from './component/admin/facescanning/facescanning.component';
import { StaffregisterComponent } from './component/admin/staffregister/staffregister.component';
import { StaffdashboardComponent } from './component/staffs/staffdashboard/staffdashboard.component';
import { ProductregistrationComponent } from './component/staffs/productregistration/productregistration.component';
import { SIDtrailComponent } from './component/sidtrail/sidtrail.component';
import { ProductupdationComponent } from './component/staffs/productupdation/productupdation.component';
import { StaffupdationComponent } from './component/admin/staffupdation/staffupdation.component';
import { SlikComponent } from './component/slik/slik.component';

const routes: Routes = [
// {path:'',component:MainComponent},
// {path:'adminlogin',component:AdminloginComponent},
{path:'',component:AdmindashboardComponent},
{path:'staffregister',component:StaffregisterComponent},
{path:'stafflogin',component:StaffloginComponent},
{path:'userlogin',component:UserloginComponent},
{path:"userdashboard",component:UserdashboardComponent},
{path:"signup",component:SignupComponent},
{path:"facescanning",component:FacescanningComponent},
{path:"staffdashboard",component:StaffdashboardComponent},
{path:"productregistration",component:ProductregistrationComponent},
{path:"productupdation",component:ProductupdationComponent},
{path:"staffupdation",component:StaffupdationComponent},
{path:"slik",component:SlikComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

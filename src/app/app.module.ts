import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './component/admin/admindashboard/admindashboard.component';
import { StaffloginComponent } from './component/staffs/stafflogin/stafflogin.component';
import { UserloginComponent } from './component/users/userlogin/userlogin.component';
import { UserdashboardComponent } from './component/users/userdashboard/userdashboard.component';
import { SignupComponent } from './component/users/signup/signup.component';
import { FacescanningComponent } from './component/admin/facescanning/facescanning.component';
import { StaffregisterComponent } from './component/admin/staffregister/staffregister.component';
import { StaffdashboardComponent } from './component/staffs/staffdashboard/staffdashboard.component';
import { ProductregistrationComponent } from './component/staffs/productregistration/productregistration.component';
import { SIDtrailComponent } from './component/sidtrail/sidtrail.component';
import { ProductupdationComponent } from './component/staffs/productupdation/productupdation.component';
import { StaffupdationComponent } from './component/admin/staffupdation/staffupdation.component';
// import { SlikgridComponent } from './component/slikgrid/slikgrid.component';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { SlikComponent } from './component/slik/slik.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    // AdminstaffComponent,
    // AdminproductComponent,
    StaffloginComponent,
    UserloginComponent,
    UserdashboardComponent,
    SignupComponent,
    FacescanningComponent,
    StaffdashboardComponent,
    StaffregisterComponent,
    ProductregistrationComponent,
    SIDtrailComponent,
    ProductupdationComponent,
    StaffupdationComponent,
    // SlikgridComponent,
    SlikComponent,
    
    // StaffregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSlickgridModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }

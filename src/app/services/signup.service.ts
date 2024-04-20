import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  couchdburl:string='https://192.168.57.185:5984';
  couchusername:string='d_couchdb';
  couchpassword:string='Welcome#2';
  databasename:any='crudop';


  header={
    'Authorization':`Basic ${btoa(this.couchusername + ':' + this.couchpassword)}`
  };

  constructor(private http:HttpClient) { }

  create(document:any){
    const createurl=`${this.couchdburl}/${this.databasename}`;
    return this.http.post(createurl,document ,{
     headers:this.header
    });
  }

  checkExistingUser(phone:any){
    const read=`${this.couchdburl}/${this.databasename}/_design/view/_view/PhoneSearch?key=${phone}`;
    return this.http.get(read,{
      headers:this.header
    })
  }
  // login(phoneNumber: any): Observable<any[]> {
  //   console.log("service starts");
    
  //   // console.log("service starts");

  //   return this.db
  //     .list('/users', (ref) =>
  //       ref.orderByChild('phoneNumber').equalTo(phoneNumber)
  //     )
  //     .valueChanges()
  // }

}

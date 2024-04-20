import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffserviceService {

  couchdburl:string='https://192.168.57.185:5984';
  couchusername:string='d_couchdb';
  couchpassword:string='Welcome#2';
  databasename:any='clothingboutiques';


  header={
    'Authorization':`Basic ${btoa(this.couchusername + ':' + this.couchpassword)}`
  };

  constructor(public http:HttpClient) { }
  create(document:any){
    const createurl=`${this.couchdburl}/${this.databasename}`;
    return this.http.post(createurl,document ,{
     headers:this.header
    });
  }

  getproducts(){
    const read=`${this.couchdburl}/${this.databasename}/_design/view/_view/GetAllProduct?key="ProductCreation"`
    return this.http.get(read,{
      headers:this.header
    })
  }
}

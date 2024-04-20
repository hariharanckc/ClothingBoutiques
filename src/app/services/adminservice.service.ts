import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})




export class AdminserviceService {

  couchdburl:string='https://192.168.57.185:5984';
  couchusername:string='d_couchdb';
  couchpassword:string='Welcome#2';
  databasename:any='clothingboutiques';


  header={
    'Authorization':`Basic ${btoa(this.couchusername + ':' + this.couchpassword)}`
  };
  public counter: number = 0;

 

  constructor(public http:HttpClient) { }


  create(document:any){
    const createurl=`${this.couchdburl}/${this.databasename}`;
    return this.http.post(createurl,document ,{
     headers:this.header
    });
  }

// read(phone:any){
//   const read=`${this.couchdburl}/${this.databasename}/_all_docs?include_docs=true`;
//   return this.http.get(read,{
//     headers:this.header
//   })
// }
// read(phone:any){
//   const read=`${this.couchdburl}/${this.databasename}/_design/view/_view/PhoneSearch?key=${phone}`;
//   return this.http.get(read,{
//     headers:this.header
//   })
// }

getadminID(adminID:any){
  const read=`${this.couchdburl}/${this.databasename}/_design/view/_view/PhoneSearch?key=${adminID}`;
  return this.http.get(read,{
    headers:this.header
  })
}

read(){
  const read=`${this.couchdburl}/${this.databasename}/_design/view/_view/GetAllStaff?key="createemployee"`
  return this.http.get(read,{
    headers:this.header
  })
}

// updatestaff(id:string,_rev:any){
//  return this.http.put(`${this.couchdburl}/${this.databasename}/${id}?rev=${_rev}`,{headers:this.header})
// }

// https://192.168.57.185:5984/crudop/_design/view/_view/PhoneSearch?key= 4545454545
delete(d:string,rev:string){
    const delet=`${this.couchdburl}/${this.databasename}/${d}?rev=${rev}`;
    return this.http.delete(delet,{
      headers:this.header
    })
}

updatstaffedit(_id:string,_rev:string,docs:any){
  const updat=`${this.couchdburl}/${this.databasename}/${_id}?rev=${_rev}`;
  return this.http.put(updat,docs,{
    headers:this.header
  })
}

generateEmployeeId(initial:number): string {
  this.counter+=1
  console.log(this.counter,initial)
  return 'SID' + (initial+this.counter).toString().padStart(3, '0');
}



GetSID(){
  const read=`${this.couchdburl}/${this.databasename}/_design/view/_view/adminView`
  return this.http.get(read,{
    headers:this.header
  })
}

}

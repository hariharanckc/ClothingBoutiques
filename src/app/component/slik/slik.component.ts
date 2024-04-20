import { Component } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-slik',
  templateUrl: './slik.component.html',
  styleUrls: ['./slik.component.css']
})
export class SlikComponent {
  constructor(public adminService: AdminserviceService) { }
 columnDefinitions = [
    { id: 'sid ', name: 'SID', field: 'sid', sortable: true },
    { id: 'name', name: 'Name', field: 'name', sortable: true },
    { id: 'gender', name: 'Gender', field: 'gender', sortable: true }
  ];

  gridOptions = {
    enableAutoResize: true,
    enableCellNavigation: true,
    enableSorting: true
  };
  dataset:any[] =[];
  ngOnInit(): void {
  
    this.dataset = this.read();
  }
  read():any{
    this.adminService.read().subscribe(async (res: any) => {
      console.log(res);
      return await res.rows.map((item:any)=>{ 
         return { sid: item.value.data.SID, name: item.value.data.Staffname, gender: item.value.data.Gender };
      });
    });
  }
}
  
 


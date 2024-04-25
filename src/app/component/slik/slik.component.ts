import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-slik',
  templateUrl: './slik.component.html',
  styleUrls: ['./slik.component.css']
})
export class SlikComponent {
  grid: any;
  constructor(public adminService: AdminserviceService) { }
 columnDefinitions = [
    { id: 'sid ', name: 'SID', field: 'sid', sortable: true,filterable:true },
    { id: 'name', name: 'Name', field: 'Staffname', sortable: true,filterable:true  },
    { id: 'Date', name: 'Date', field: 'Date', sortable: true,filterable:true  },
    { id: 'Section', name: 'Section', field: 'Section', sortable: true,filterable:true  },
    { id: 'Snumber', name: 'Snumber', field: 'Snumber', sortable: true,filterable:true  },
    { id: 'Ssalary', name: 'Ssalary', field: 'Ssalary', sortable: true , filterable: true,    },
   

  ];  

  gridOptions = {
    enableAutoResize: true,
    enableCellNavigation: true,
    enableSorting: true,
    enableFiltering: true,
   

}
  dataset:any[] =[];

  ngOnInit(): void {
  
this.read();
  }
  read():any{
    this.adminService.read().subscribe(async (res: any) => {
      console.log(res);
      this.dataset= res.rows.reverse().map((item:any,index:number)=>{ 

         return {
          id: index+1,
          sid: item.value.data.SID, 
          Staffname: item.value.data.Staffname, 
          gender: item.value.data.Gender,
          Section:item.value.data.Section,
          Date:item.value.data.Date,
          Snumber:item.value.data.Snumber,
          Ssalary:item.value.data.Ssalary,

          };
        
      });
    });
  }
}
  
 


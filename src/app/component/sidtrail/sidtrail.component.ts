import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { DataService } from './data.service'; // Assuming you have a 

@Component({
  selector: 'app-sidtrail',
  templateUrl: './sidtrail.component.html',
  styleUrls: ['./sidtrail.component.css']
})
export class SIDtrailComponent  {
  // createEmployeeForm!: FormGroup;
  // editingSID!: string; // To store the SID being edited, if any
  // recordCount: number = 0; // Counter variable to keep track of the number of records

  // constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  // ngOnInit(): void {
  //   this.createEmployeeForm = this.formBuilder.group({
  //     SID: ['SID001'], // Assuming SID001 is the default SID for new entries
  //     Staffname: ['', Validators.required],
  //     // Other form controls
  //   });

  //   // If you're editing an existing record, retrieve its data and prefill the form
  //   // Example:
  //   // const existingRecord = this.dataService.getRecordBySID('SID001');
  //   // this.createEmployeeForm.patchValue(existingRecord);

  //   // Get the initial record count
  //   this.updateRecordCount();
  // }

  // submit() {
  //   if (this.createEmployeeForm.valid) {
  //     const formData = this.createEmployeeForm.value;
  //     if (this.editingSID) {
  //       // Update operation
  //       this.dataService.updateRecord(formData, this.editingSID).subscribe(() => {
  //         console.log('Record updated successfully');
  //         // Optionally, reset the form or take other actions
  //         this.resetForm();
  //         // Increment record count
  //         this.updateRecordCount();
  //       });
  //     } else {
  //       // Create operation
  //       this.dataService.createRecord(formData).subscribe(() => {
  //         console.log('Record created successfully');
  //         // Optionally, reset the form or take other actions
  //         this.resetForm();
  //         // Increment record count
  //         this.updateRecordCount();
  //       });
  //     }
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }

  // delete() {
  //   if (this.editingSID) {
  //     this.dataService.deleteRecord(this.editingSID).subscribe(() => {
  //       console.log('Record deleted successfully');
  //       // Optionally, reset the form or take other actions
  //       this.resetForm();
  //       // Decrement record count
  //       this.updateRecordCount();
  //     });
  //   }
  // }

  // Optional: Reset the form after submission or cancellation
  // resetForm() {
  //   this.createEmployeeForm.reset();
  //   this.editingSID = null;
  // }

  // Update the record count by fetching it from the backend
  // updateRecordCount() {
  //   this.dataService.getRecordCount().subscribe(count => {
  //     this.recordCount = count;
  //   });
  // }

  // Function to increment the last 3 digits of SID
//   incrementSIDLastDigits(SID: string): string {
//     const lastThreeDigits = parseInt(SID.substr(3), 10);
//     const newLastThreeDigits = lastThreeDigits + 1;
//     return `SID${('000' + newLastThreeDigits).slice(-3)}`;
//   }
}

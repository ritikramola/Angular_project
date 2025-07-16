import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponse, IDesignition } from '../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

    designationList: IDesignition[] = []; // Variable to hold the list of designations
    isLoader : boolean = true; // Variable to control the loading state
    // constructor(private masterService: MasterService) { } // Old way of injecting service
    masterService = inject(MasterService); // Injecting MasterService to access its methods

    ngOnInit() : void{
      this.masterService.getDesignations().subscribe((result: APIResponse) => {
        this.designationList = result.data; // Assigning the response data to the designationList variable
        this.isLoader = false; // Setting the loader to false after data is fetched
      }, (error) => {  //used if any error occurs while fetching data
            alert("API Fail")
            this.isLoader = false; // Setting the loader to false even if there is an error
      })
    }
}

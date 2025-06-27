import { Component } from '@angular/core';
import { RolesComponent } from "../roles/roles.component";
import { DesignationComponent } from "../designation/designation.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [RolesComponent, DesignationComponent,CommonModule], // any imports needed for this component
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
    currentcomponent: string = 'Roles'; // Default component to load
    // Function to change the current component based on the tab clicked
    // This function will be called when a tab is clicked
    changeTab(tabname:string) {
      this.currentcomponent = tabname
    }
}

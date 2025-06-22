import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

//component decorator //means what this class is going to do
//selector is the name of the component
@Component({
  selector: 'app-roles',
  imports: [FormsModule],  // any imports needed for this component
  standalone: true, // this component is standalone
  // templateUrl is the path to the HTML file for this component
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
// class is the logic of the component //we create variable and functions here
export class RolesComponent {
  // // variable to hold the roles

  firstname: string = 'Tutorial';
  angularversion: string = 'Angular 17';
  version: number = 17;
  isActive: boolean = true;
  currentDate: Date = new Date();

  inputType: string = "button"; // this is a variable that holds the type of the input element
  selectState : string = ''; // this is a variable that holds the selected state
  //we can only use the variable in the HTML file i.e // roles.component.html
}
 
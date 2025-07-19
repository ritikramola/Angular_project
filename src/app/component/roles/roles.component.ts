import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';  // Importing necessary Angular core module
// Importing OnInit lifecycle hook to perform initialization logic
import { FormsModule } from '@angular/forms';
import { APIResponse, IRole } from '../model/interface/role';
import { CommonModule } from '@angular/common';


//component decorator //means what this class is going to do
//selector is the name of the component
@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],  // any imports needed for this component
  standalone: true,         // this component is standalone, meaning it can be used independently without being part of a module
  // templateUrl is the path to the HTML file for this component
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})


// class is the logic of the component //we create variable and functions here //implementing mean using it as lifecycle hook otherwise it's an function only
export class RolesComponent implements OnInit {

//constructor(private http: HttpClient) { }  // Injecting HttpClient to make HTTP requests //this is the old way

  rolelist: IRole[] = [] // variable to hold the roles
  http = inject(HttpClient); // Injecting HttpClient to make HTTP requests using the new inject function //this is the new way
  isLoader: boolean = true; // Variable to control the loading state


ngOnInit(): void {
  this.getAllRoles(); // Calling the method to get all roles when the component is initialized
  // This method is called when the component is initialized
  // You can perform any initialization logic here
  //   alert("Welcome")    // this will run as soon as the component is initialized
}

getAllRoles() {
  this.http.get<APIResponse>('https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllRoles').subscribe((res:APIResponse)=>{
    this.rolelist = res.data; // Assigning the response data to the rolelist variable
    this.isLoader = false; // Setting the loader to false after data is fetched
  })
}
































































  // // variable to hold the roles

//   firstname: string = 'Tutorial';
//   angularversion: string = 'Angular 17';
//   version: number = 17;
//   isActive: boolean = true;
//   currentDate: Date = new Date();

//   inputType: string = "button"; // this is a variable that holds the type of the input element
//   selectState : string = ''; // this is a variable that holds the selected state
//   //we can only use the variable in the HTML file i.e // roles.component.html

//   showWelcomeAlert() {  // this is a function that shows an alert when called
//     alert('Welcome to the Angular 17 Tutorial');
//   }

//   showMessage(message:String) { // this is a function that shows an alert when called
//     alert(message);
//   }
// }











}
 
//we can create funcction in angular 18 
// here we add the routes for the application like which component to load for which path.
// we can use the new inject function to inject services in the component
import { Routes } from '@angular/router';
import { MasterComponent } from './component/master/master.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { ClientComponent } from './component/client/client.component';

export const routes: Routes = [
    {
        path:"",    //default path
        redirectTo: "master",   //redirecting to master component
        pathMatch: "full"       //full path match
    },
{
    path: "master",  //path for master component
    component:MasterComponent  //component to be loaded
},
{
    
    path: "employee",  //path for employee component
    component:EmployeeComponent  //component to be loaded

},
{
    path: "client",  //path for cleint component
    component:ClientComponent  //component to be loaded

}


];

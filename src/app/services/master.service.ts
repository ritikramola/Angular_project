import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  // constructor(private http: HttpClient) { } //old method
  http = inject(HttpClient); // Injecting HttpClient to make HTTP requests using the new inject function

  getDesignations(): Observable<APIResponse> {
    return this.http.get<APIResponse>('https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllDesignation'); //we integrate this API to get the designations to designation.component.ts
  }
}

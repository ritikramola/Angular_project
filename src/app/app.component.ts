import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RolesComponent } from './component/roles/roles.component';
import { FormsModule } from '@angular/forms';
import { MasterComponent } from './component/master/master.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root', 
  imports: [RouterOutlet,RouterLink,CommonModule,MasterComponent,RouterLinkActive], // any imports needed for this component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_project';
}

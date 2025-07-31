import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponse } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule, ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientObj: Client = new Client();
  clientList: Client[] = [];

  clientServices = inject(ClientService);

  ngOnInit() : void {
    this.loadClients(); // Load clients when the component initializes
  }

  loadClients() {
    // This method will be used to load clients from the service
    // For now, we can just log a message or implement the logic later
    this.clientServices.getAllClients().subscribe((res:APIResponse) => {
      this.clientList = res.data;
  })
}
  
  onSaveClient() {
    this.clientServices.addUpdate(this.clientObj).subscribe((res: APIResponse) => {
      if(res.result){
        alert("Client created successfully")
        this.loadClients;
        this.clientObj = new Client(); // Reset the client object after saving
      } else {
        alert(res.message)
      }
      
  })
}

onEdit(item: Client) {
  this.clientObj = item; // Set the client object to the item being edited
}

onDelete(id: number) {
  const isDelete = confirm("Are you sure you want to delete this client?");
  if(isDelete) {

      this.clientServices.deleteClientById(id).subscribe((res: APIResponse) => {
      if(res.result){
        alert("Client deleted successfully")
        this.loadClients;
      } else {
        alert(res.message)
      }
  })
  } // If user cancels, do nothing

}








}


import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { ClientService } from '../client.service';
import { ClientInterface } from '../interfaces/client';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clients: Observable<ClientInterface[]>;
  
  constructor(
    private clientService: ClientService,
  ) { 
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clients = this.clientService.getClients()
    console.log(this.clients)
  }

  deleteClient(id: number) {
    console.log(id)
    this.clientService.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}

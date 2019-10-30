import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Store } from '@ngrx/store';

import { ClientService } from '../client.service';
import { ClientInterface } from '../interfaces/client';
import { AppStateInterface } from '../interfaces/message'

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clients: Observable<ClientInterface[]>;
  
  /*todos los objetos que vienen por store son observables*/
  message$: Observable<any>;

  constructor(
    private clientService: ClientService,
    private storeMessage: Store<AppStateInterface>,
    private router: Router
  ) { 
    this.message$ = this.storeMessage.select('message')
  }

  ngOnInit() {
    this.reloadData();
  }

  spanishMessage(){
    this.storeMessage.dispatch({
      type: 'ESPAÑOL'
    })
  }

  frenchMessage(){
    this.storeMessage.dispatch({
      type: 'FRANCES'
    })
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

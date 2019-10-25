import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from '../counter.actions';

import { ClientService } from '../client.service';
import { ClientInterface } from '../interfaces/client';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clients: Observable<ClientInterface[]>;
  
  /*todos los objetos que vienen por store son observables*/
  count$: Observable<number>;
  message$: Observable<any>;

  constructor(
    private store: Store<{ count: number }>,
    private clientService: ClientService,
    private storeMessage: Store<AppState>,
    private router: Router
  ) { 
    this.count$ = store.pipe(select('count'));
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

  /**** STORE ****/
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
  /**** END STORE ****/

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

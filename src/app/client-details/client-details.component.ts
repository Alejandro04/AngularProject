import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ClientListComponent } from '../client-list/client-list.component';
import { ClientService } from '../client.service';
import { ClientInterface } from '../interfaces/client';
import { AppStateInterface } from '../interfaces/message'

import { Observable } from "rxjs";
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  id: number
  client: ClientInterface

  /*todos los objetos que vienen por store son observables*/
  message$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private storeMessage: Store<AppStateInterface>,
  ) { }

  ngOnInit() {
    this.message$ = this.storeMessage.select('message')

    this.client = new ClientInterface();

    this.id = this.route.snapshot.params['id'];

    console.log(this.id)

    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
      
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
}

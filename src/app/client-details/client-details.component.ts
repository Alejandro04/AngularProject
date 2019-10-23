import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ClientListComponent } from '../client-list/client-list.component';
import { ClientService } from '../client.service';
import { ClientInterface } from '../interfaces/client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  id: number
  client: ClientInterface

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.client = new ClientInterface();

    this.id = this.route.snapshot.params['id'];

    console.log(this.id)

    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
      
  }
}

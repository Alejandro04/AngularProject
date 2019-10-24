import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientService } from '../client.service';
import { ClientInterface } from '../interfaces/client';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {

  id: number;
  client: ClientInterface;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.client = new ClientInterface();

    this.id = this.route.snapshot.params['id'];
    
    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateClient();    
  }

  updateClient() {
    this.clientService.updateClient(this.id, this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    
    this.client = new ClientInterface();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/clients']);
  }

}

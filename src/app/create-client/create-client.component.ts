import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientService } from '../client.service';
import { ClientInterface } from '../interfaces/client';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  client: ClientInterface = new ClientInterface();
  submitted = false;

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  newClient(): void {
    this.submitted = false;
    this.client = new ClientInterface();
  }

  onSubmit() {
    this.submitted = true;
    //console.log(this.client.name)
    //console.log(this.client.description)
    
    this.save();    
  }
  save() {
    this.clientService.createClient(this.client)
      .subscribe(data => console.log(data), error => console.log(error));
   
    this.client = new ClientInterface();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/clients']);
  }

}

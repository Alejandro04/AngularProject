import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientListComponent
  },
  {
    path: 'clients/add',
    component: CreateClientComponent
  },
  {
    path: 'clients/edit/:id',
    component: UpdateClientComponent
  },
  {
    path: 'clients/:id',
    component: ClientDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

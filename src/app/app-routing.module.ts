import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientListComponent
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

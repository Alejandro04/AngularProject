import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }


  getClients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/clients`);
  }
  getClient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/clients/${id}`);
  }

  createClient(client: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/clients`, client);
  }

  updateClient(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/clients/${id}`, value);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/clients/${id}`);
  }
}

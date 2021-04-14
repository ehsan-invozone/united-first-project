import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//const baseUrl = 'http://18.206.59.178:8070/api/price_histories';
const baseUrl = 'http://localhost:8070/api/price_histories';
@Injectable({
  providedIn: 'root'
})
export class price_histories {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }
  
  getAllpagination(page,size){
    return this.http.get(`${baseUrl}/pagination?page=${page}&siez=${size}`);
  }
  getAllWhere(id) {
    return this.http.get(`${baseUrl}/findone/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
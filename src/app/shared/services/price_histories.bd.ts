import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

const baseUrl = environment.baseURL+'/api/price_histories';
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
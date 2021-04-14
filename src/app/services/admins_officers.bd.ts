import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://18.206.59.178:8060/api/directors_and_officiers';
@Injectable({
  providedIn: 'root'
})
export class directors {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }
  getAllWhere(id) {
    return this.http.get(`${baseUrl}/where/${id}`);
  }
  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
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

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { chuck } from '../types/chuck.model';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  private API_URL = "https://api.chucknorris.io/jokes/random"

  constructor(private http: HttpClient) { }

  getJoke(): Observable<chuck> {
    return this.http.get<chuck>(this.API_URL)
  }

}

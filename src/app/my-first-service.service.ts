import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyFirstServiceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Sample API
  constructor(private http: HttpClient) { }
    // Add service logic here
    getGreeting(): string {
      return 'Hello from MyFirstService!';
    }
      // Fetch data from API
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

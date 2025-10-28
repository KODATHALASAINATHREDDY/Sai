import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'exp8b';
  users:Observable<any[]>;
  constructor(private http:HttpClient)
  {
     this.users=this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
}
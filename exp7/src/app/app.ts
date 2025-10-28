import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatSidenavModule,MatButtonModule,MatListModule,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  opened=false;
}
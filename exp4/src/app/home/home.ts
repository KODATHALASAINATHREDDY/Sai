import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
selector: 'app-home',
standalone: true,
imports: [],
templateUrl: './home.html',
styleUrl: './home.css'
})
export class Home {
constructor(private router: Router) {}
goToDestinations() {
this.router.navigate(['/destinations']);
}
goToBookings() {
this.router.navigate(['/bookings']);
}
}
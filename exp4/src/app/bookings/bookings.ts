import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
selector: 'app-bookings',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './bookings.html',
styleUrls: ['./bookings.css']
})
export class Bookings {
name: string = '';
persons: number | null = null;
destination: string = '';
bookingConfirmed = false;
submitBooking() {
if (this.name && this.persons && this.destination) {
this.bookingConfirmed = true;
}
}
}
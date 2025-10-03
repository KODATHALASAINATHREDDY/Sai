import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Destinations } from './destinations/destinations';
import { Bookings } from './bookings/bookings';
export const routes: Routes = [
{ path: '', component: Home },
{ path: 'destinations', component: Destinations },

{ path: 'bookings', component: Bookings }
];
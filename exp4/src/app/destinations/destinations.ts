import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
selector: 'app-destinations',
standalone: true,
imports: [CommonModule],
templateUrl: './destinations.html',
styleUrls: ['./destinations.css']
})
export class Destinations {
selected: string = '';
destinations: { [key: string]: string[] } = {
  Paris: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
Tokyo: ['Tokyo Tower', 'Shinjuku Gyoen', 'Asakusa Temple'],
'New York': ['Statue of Liberty', 'Central Park', 'Times Square'],
Dubai: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Mall']
};
selectDestination(destination: string) {
this.selected = destination;
}
}
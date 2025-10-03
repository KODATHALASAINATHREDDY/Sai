import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Faculty } from './faculty/faculty';

@Component({
  selector: 'app-root',
  standalone: true,                    // Standalone component declaration
  imports: [CommonModule, Faculty],   // Importing CommonModule and Faculty component
  templateUrl: './app.html',          // Root HTML template
  styleUrls: ['./app.css']            // CSS styles for the root component
})
export class App {
  protected title = 'exp5';           // Title property (optional use in template)
}

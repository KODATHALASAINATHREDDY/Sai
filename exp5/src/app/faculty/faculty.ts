import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './faculty.html',
  styleUrls: ['./faculty.css']
})
export class Faculty {
  selectedDept: string = '';
  selectedGender: string = '';

  facultyList = [
    {
      name: 'Dr. N. Kasiviswanath',
      dept: 'CSE',
      email: 'hod.cse@gprec.ac.in',
      gender: 'Male',
      photo: 'assets/kasi.png'
    },
    {
      name: 'Dr. B.Thimma Reddy',
      dept: 'CSE',
      email: 'thimmareddy.cse@gprec.ac.in',
      gender: 'Male',
      photo: 'assets/thimma.png'
    },
    {
      name: 'Dr. K. Sudhakar ',
      dept: 'CSE',
      email: 'sudhakar.cse@gprec.ac.in',
      gender: 'Male',
      photo: 'assets/sudhakar.png'
    },
    {
      name: 'Dr. T. Swathi',
      dept: 'CSE',
      email: 'sawthi.ecs@gprec.ac.in',
      gender: 'Female',
      photo: 'assets/swathi.png'
    },
    {
      name: 'Sri. B. Mohan Krishna',
      dept: 'CSE',
      email: 'mohankrishna.ecs@gprec.ac.in',
      gender: 'Male',
      photo: 'assets/mohan.png'
    }
  ];

  get filteredFaculty() {
    return this.facultyList.filter(faculty =>
      (this.selectedDept ? faculty.dept === this.selectedDept : true) &&
      (this.selectedGender ? faculty.gender === this.selectedGender : true)
    );
  }
}
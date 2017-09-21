import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Node.js';
  title = 'Angular 4.0';
  id: number = 123;
  age = 20;
  fruits = ['Apple', 'Mongo', 'Orange'];
  cars = { id: 1, name: 'Toyota' };
  myCars = [
    { id: 1, name: 'Toyota' },
    { id: 2, name: 'Honda' },
  ];

  constructor() {
    this.getName();
  }

  getName() {
    let name = 'Express JS';
  }

  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = "Task Tasker";
  add: string = "Add2";

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTasks() {
    console.log('Toggled');
  }

}

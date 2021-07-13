import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-box',
  templateUrl: './task-box.component.html',
  styleUrls: ['./task-box.component.css']
})
export class TaskBoxComponent implements OnInit {

  @Input() task: Task = {id: 0, text: '', day: '', reminder:false};
  @Output() deleteClick: EventEmitter<Task> = new EventEmitter();
  @Output() reminderClick: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(task: Task) {
    this.deleteClick.emit(task);
  }

  onDblClick(task: Task) {
    this.reminderClick.emit(task);
  }

}

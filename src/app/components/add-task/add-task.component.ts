import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  @Output() addTask: EventEmitter<Task> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  submitTask() {
    if (this.text === '' || this.day === '') {
      alert('pls fill all details!');
      return;
    }
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.addTask.emit(newTask);

    this.text = this.day = '';
    this.reminder = false;

  }

}

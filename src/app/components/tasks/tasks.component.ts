import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  TASKS: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.TASKS = tasks);
  }

  deleteTask(task: Task) {
    this.TASKS = this.TASKS.filter(t => t.id !== task.id);
  }

  changeReminder(task: Task) {
    task.reminder = !task.reminder;
  }

  addTask(task: Task) {
    this.TASKS.push(task);
  }

}

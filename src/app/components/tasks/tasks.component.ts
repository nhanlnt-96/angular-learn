import { Component, OnInit } from '@angular/core';
import { TASKS } from "../../config/mockTask.config";
import { Task } from "../../config/taskInterface.config";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor() {
  }

  ngOnInit(): void {
  }

}

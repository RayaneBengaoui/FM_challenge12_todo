import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  private _todos: Todo[];
  private _todosSubscription: Subscription;

  constructor(private todoService: TodosService) {
    this._todos = [];
    this._todosSubscription = new Subscription();
  }

  ngOnInit(): void {
    this._todos = this.todoService.todos;
  }

  public get todos(): Todo[] {
    return this._todos;
  }
}

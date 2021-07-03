import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  private _todos!: Todo[];
  private _todosSubscription!: Subscription;

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this._todos = this.todoService.todos;
    this._todosSubscription = this.todoService.todosChanged.subscribe(
      (todos: Todo[]) => {
        this._todos = todos;
      }
    );
  }

  ngOnDestroy(): void {
    this._todosSubscription.unsubscribe();
  }

  public get todos(): Todo[] {
    return this._todos;
  }

  drop(event: CdkDragDrop<Todo[]>) {
    moveItemInArray(this._todos, event.previousIndex, event.currentIndex);
  }
}

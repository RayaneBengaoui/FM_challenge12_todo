import { Observable, Subject } from 'rxjs';
import { Todo } from '../models/todo.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DogAPI } from '../models/dog-api.interface';

@Injectable()
export class TodosService {
  todosChanged = new Subject<Todo[]>();
  public randomShiba: string = '';
  private _todos: Todo[] = [
    new Todo(
      'Jog around the park 3x',
      false,
      'https://images.dog.ceo//breeds//shiba//shiba-14.jpg'
    ),
    new Todo(
      '10min meditation',
      false,
      'https://images.dog.ceo//breeds//shiba//shiba-15.jpg'
    ),
  ];
  private _completedTodos: Todo[] = [];

  constructor(private http: HttpClient) {}

  public get todos(): Todo[] {
    return this._todos.slice();
  }

  public addTodo(todo: Todo): void {
    this._todos.push(todo);
    this.todosChanged.next(this._todos.slice());
  }

  public fetchRandomShiba(): Observable<DogAPI> {
    return this.http.get<DogAPI>(
      'https://dog.ceo/api/breed/shiba/images/random'
    );
  }
}

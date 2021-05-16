import { Subject } from 'rxjs';
import { Todo } from '../models/todo.model';

export class TodosService {
  todosChanged = new Subject<Todo[]>();
  private _todos: Todo[] = [
    new Todo('Jog around the park 3x', false),
    new Todo('10min meditation', false),
  ];
  private _completedTodos: Todo[] = [];

  public get todos(): Todo[] {
    return this._todos.slice();
  }

  public addTodo(todo: Todo): void {
    this._todos.push(todo);
    this.todosChanged.next(this._todos.slice());
  }
}

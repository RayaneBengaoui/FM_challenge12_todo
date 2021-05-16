import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit {
  public _todoForm!: FormGroup;
  constructor(private fb: FormBuilder, private todoService: TodosService) {}

  ngOnInit(): void {
    this._todoForm = this.fb.group({
      description: new FormControl(null),
    });
  }

  public onSubmit(): void {
    this.todoService.addTodo(new Todo(this.todoForm.value.description, false));
    this.todoForm.reset();
  }

  public get todoForm(): FormGroup {
    return this._todoForm;
  }
}

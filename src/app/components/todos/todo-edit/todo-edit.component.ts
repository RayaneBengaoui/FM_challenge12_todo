import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DogAPI } from 'src/app/models/dog-api.interface';
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
    const description = this.todoForm.value.description;

    this.todoService.fetchRandomShiba().subscribe((response: DogAPI) => {
      this.todoService.addTodo(new Todo(description, false, response.message));
    });

    this.todoForm.reset();
  }

  public get todoForm(): FormGroup {
    return this._todoForm;
  }
}

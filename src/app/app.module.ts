import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoEditComponent } from './components/todos/todo-edit/todo-edit.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { HeaderComponent } from './components/todos/todo-edit/header/header.component';
import { TodosService } from './services/todos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoEditComponent,
    TodoListComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}

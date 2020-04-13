import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { filtrosValidos } from 'src/app/filtro/fitro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];
  filtroActual: filtrosValidos;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    /*  this.store.select('todos').subscribe(todos => {
       this.todos = todos;
     }); */
     // Este subscribe devuelve todo el state de la aplicacion
    this.store.subscribe(({ todos, filtro }) => {
      this.todos = todos;
      this.filtroActual = filtro;
    });
  }

}

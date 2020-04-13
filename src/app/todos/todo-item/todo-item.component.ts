import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputElem') inputElem: ElementRef<HTMLInputElement>;

  chkCompletado: FormControl;
  txtEditar: FormControl;
  editando = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtEditar = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }))
    });
  }

  editar() {
    this.editando = true;
    this.txtEditar.setValue(this.todo.texto);
    setTimeout(() => {
      this.inputElem.nativeElement.select();
    }, 10);

  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtEditar.invalid) { return; }
    if (this.txtEditar.value === this.todo.texto) { return; }
    this.store.dispatch(actions.editar({ id: this.todo.id, texto: this.txtEditar.value }));
  }

  borrar() {
    this.store.dispatch(actions.borrar({ id: this.todo.id }));
  }
}

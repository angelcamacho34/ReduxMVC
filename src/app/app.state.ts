import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { filtrosValidos } from './filtro/fitro.actions';
import { filtroReducer } from './filtro/filtro.reducer';

export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos;
}
// aquí se conjuntan los reducer que tenga nuestra aplicacion, este nombre es el asignado en el AppModule
export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
};

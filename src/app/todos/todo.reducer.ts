import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, borrarAll } from './todo.actions';
import { Todo } from './models/todo.model';


export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Matar a thanos'),
    new Todo('Tejer con spydy')
];

// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(estadoInicial,
    // El operado ... es para destruturar el estado que ya se llevaba
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    // Se utiliza la funcion filter para regresar el state en un nuevo arreglo
    on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
    // Map tambien devuelve un nuevo arreglo
    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return { ...todo, completado: !todo.completado };
            } else { return todo; }
        });
    }),
    on(editar, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return { ...todo, texto: texto };
            } else { return todo; }

        });
    }),
    on(toggleAll, (state, { completado }) => {
        return state.map(todo => {
            return { ...todo, completado: completado };
        });
    }),
    on(borrarAll, (state) => state.filter(todo => !todo.completado))
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}

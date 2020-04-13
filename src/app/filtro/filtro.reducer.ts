import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './fitro.actions';

export const initialState: filtrosValidos = 'todos';

// tslint:disable-next-line: variable-name
const _filtroReducer = createReducer(initialState,
    // regresa solo el filtro
    on(setFiltro, (state, { filtro }) => filtro),
);



export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
}
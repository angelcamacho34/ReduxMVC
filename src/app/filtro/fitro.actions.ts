import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction('[Filter] set Filtro', props<{ filtro: filtrosValidos }>());

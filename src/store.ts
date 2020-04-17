import createStore from 'unistore';
import devtools from 'unistore/devtools';

import { counterState } from '@/modules/counter/counter.model';
//<-- IMPORT MODULE STATE -->

const appState = {
    counter: counterState,
    //<-- INJECT MODULE STATE -->
} as const;

export type AppState = typeof appState;

export const store =
    process.env.NODE_ENV === 'production'
        ? createStore(appState)
        : devtools(createStore(appState));

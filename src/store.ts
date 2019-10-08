import createStore from 'unistore';
import devtools from 'unistore/devtools';

export interface State {
    count: number;
}

export interface ActionCreators {
    increment: Function;
}

const initialState = { count: 0 };

export const store =
    process.env.NODE_ENV === 'production'
        ? createStore(initialState)
        : devtools(createStore(initialState));

export const actions: ActionCreators = {
    increment(state: State): Partial<State> {
        return { count: state.count + 1 };
    },
};

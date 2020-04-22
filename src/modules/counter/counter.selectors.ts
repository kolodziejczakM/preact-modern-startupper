import { createSelector } from 'reselect';
import { AppState } from '@/store';
import { CounterState } from './counter.state';

const selectCounter = (state: AppState): CounterState => state.counter;

export const selectCounterValue = createSelector(
    selectCounter,
    (counter: CounterState): number => counter.value
);

import { AppState } from '@/store';
import { mergeState } from '@/common/utils/store';

export const counterState = {
    value: 0,
};

export type CounterState = typeof counterState;
const merge = mergeState<CounterState>('counter');

export const counterActions = {
    increment(appState: AppState): Partial<AppState> {
        return merge({ value: appState.counter.value + 1 });
    },
} as const;

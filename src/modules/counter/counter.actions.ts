import { AppState } from '@/store';
import { mergeState } from '@/common/utils/store';
import { CounterState } from './counter.state';

const merge = mergeState<CounterState>('counter');

export const counterActions = {
    increment(appState: AppState): Partial<AppState> {
        return merge({ value: appState.counter.value + 1 });
    },
} as const;

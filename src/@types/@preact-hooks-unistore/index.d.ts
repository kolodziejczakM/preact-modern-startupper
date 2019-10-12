import { Action, BoundAction, Store } from 'unistore';
import { Provider } from 'preact';

declare module '@preact-hooks/unistore' {
    export function useSelector<TState, TSelected>(
        selector: (state: TState) => TSelected,
        equalityFn?: (left: TSelected, right: TSelected) => boolean
    ): TSelected;

    interface IStoreProvider<K> extends Provider<Store<K>> {}

    export const StoreProvider: IStoreProvider<any>;
    export function useAction<K>(action: Action<K>): BoundAction;
    export function useStore<K>(): Store<K>;
}

import { h, ComponentConstructor } from 'preact';
import PropTypes from 'prop-types';
import { connect } from 'unistore/preact';
import { actions, StoreState } from '../store';
import { HeadingSection } from './App.styles';

interface ComponentProps {
    author: string;
}

interface ComponentState {}

interface InjectedProps extends ComponentProps {
    count: number;
    increment: h.JSX.EventHandler<MouseEvent>;
}

export const App: ComponentConstructor<
    ComponentProps,
    ComponentState
> = connect<ComponentProps, ComponentState, Partial<StoreState>, InjectedProps>(
    'count',
    actions
)(({ count, increment, author }) => (
    <HeadingSection>
        <div>
            <h1>Counter value: {count}</h1>
            <div>{author}</div>
            <hr />
            <button onClick={increment}>Increment</button>
        </div>
    </HeadingSection>
));

(App as any).propTypes = {
    testingIfPropTypesCheckingWorks: PropTypes.string.isRequired,
};

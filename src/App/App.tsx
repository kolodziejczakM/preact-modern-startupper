import { h, ComponentConstructor } from 'preact';
import PropTypes from 'prop-types';
import { connect } from 'unistore/preact';
import { actions, State } from '../store';
import { HeadingText } from './App.styles';

interface IProps {}
interface IState {}

interface InjectedProps {
    count: number;
    increment: h.JSX.EventHandler<MouseEvent>;
}

export const App: ComponentConstructor<IProps, IState> = connect<
    IProps,
    IState,
    State,
    InjectedProps
>(
    'count',
    actions
)(({ count, increment }) => (
    <HeadingText>
        <div>
            Counter value: {count}{' '}
            <button onClick={increment}>Increment</button>
        </div>
    </HeadingText>
));

(App as any).propTypes = {
    count: PropTypes.string.isRequired,
};

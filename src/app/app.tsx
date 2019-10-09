import { h, ComponentConstructor } from 'preact';
import PropTypes from 'prop-types';
import { connect } from 'unistore/preact';
import { Link, Route } from 'wouter-preact';
import { TypedComponent } from '../typings/prop-types';
import { actions, StoreState } from '../store';
import { Container } from './app.styles';
import { Home } from '../routes/home/home';
import { AboutMe } from '../routes/aboutMe/aboutMe';

interface ComponentProps {
    author: string;
}

interface ComponentState {}

interface InjectedProps {
    count: number;
    increment: h.JSX.EventHandler<MouseEvent>;
}

const Component: TypedComponent<ComponentProps & InjectedProps> = ({
    count,
    increment,
    author,
}) => (
    <Container>
        <section>
            <h1>Counter value: {count}</h1>
            <div>{author}</div>
            <hr />
            <button onClick={increment}>Increment</button>
        </section>
        <section>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about-me">
                <a>About me</a>
            </Link>
        </section>
        <main>
            <Route path="/" component={Home} />
            <Route path="/about-me" component={AboutMe} />
        </main>
    </Container>
);

export const App: ComponentConstructor<
    ComponentProps,
    ComponentState
> = connect<ComponentProps, ComponentState, Partial<StoreState>, InjectedProps>(
    'count',
    actions
)(Component);

Component.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    author: PropTypes.string.isRequired,
};

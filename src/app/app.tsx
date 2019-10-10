import { h, ComponentConstructor } from 'preact';
import PropTypes from 'prop-types';
import { connect } from 'unistore/preact';
import { Link, Route } from 'wouter-preact';
import { TypedComponent } from '~typings/prop-types';
import { actions, StoreState } from '../store';
import { Container, AppDescription } from './app.styles';
import { Home } from '../routes/home/home';
import { AboutMe } from '../routes/aboutMe/aboutMe';

interface ComponentProps {
    description: string;
}

interface ComponentState {}

interface InjectedProps {
    count: number;
    increment: h.JSX.EventHandler<MouseEvent>;
}

const Component: TypedComponent<ComponentProps & InjectedProps> = ({
    count,
    increment,
    description,
}) => (
    <Container>
        <AppDescription>{description}</AppDescription>
        <header>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about-me">
                <a>About me</a>
            </Link>
        </header>
        <section>
            <h1>Testing store</h1>
            <section>
                (see redux-dev-tools): <strong>{count}</strong>
            </section>
            <button onClick={increment}>Increment</button>
            <hr />
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
    description: PropTypes.string.isRequired,
};

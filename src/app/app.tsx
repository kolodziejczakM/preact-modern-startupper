import { h, ComponentConstructor } from 'preact';
import PropTypes from 'prop-types';
import { connect } from 'unistore/preact';
import Router from 'preact-router';
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

export const AppComponent: TypedComponent<ComponentProps & InjectedProps> = ({
    count,
    increment,
    description,
}) => (
    <Container>
        <AppDescription>{description}</AppDescription>
        <header>
            <a href="/">Home</a>
            <a href="/about-me">About me</a>
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
            <Router>
                <Home path="/" />
                <AboutMe path="/about-me" />
            </Router>
        </main>
    </Container>
);

export const App: ComponentConstructor<
    ComponentProps,
    ComponentState
> = connect<ComponentProps, ComponentState, Partial<StoreState>, InjectedProps>(
    'count',
    actions
)(AppComponent);

AppComponent.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
};

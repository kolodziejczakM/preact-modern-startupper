import { h } from 'preact';
import PropTypes from 'prop-types';
import Router from 'preact-router';
import { Link } from 'preact-router/match';
import { TypedComponent } from '@/common/typings/prop-types';
import { useAction, useSelector } from '@preact-hooks/unistore';
import { Home } from '@/routes/home/home';
import { AboutMe } from '@/routes/aboutMe/aboutMe';
import { Wrapper } from './app.styles';
import { counterActions } from '@/modules/counter/counter.model';
import { selectCounterValue } from '@/modules/counter/counter.selectors';
import { Button } from '@/common/components/Button';
import { Text } from '@/modules/localisation/components/text';
import { useLocalisation } from '@/modules/localisation/localisation.context';

export const App: TypedComponent<Props> = ({ description }: Props) => {
    const [, setLanguage] = useLocalisation();
    const increment = useAction(counterActions.increment);
    const count = useSelector(selectCounterValue);

    return (
        <Wrapper>
            <h1>{description}</h1>
            <header>
                <Link href="/">Home</Link>
                <Link href="/about-me">About me</Link>
            </header>
            <section>
                <h1>Testing store</h1>
                <section>
                    Check redux-dev-tools: <strong>{count}</strong>
                </section>
                <hr />
                <Button onClick={increment}>
                    <Text>increment</Text>
                </Button>
                <hr />
                <Button onClick={(): void => setLanguage('pl')}>
                    Change to polish
                </Button>
                <hr />
            </section>
            <main>
                <Router>
                    <Home path="/" />
                    <AboutMe path="about-me" />
                </Router>
            </main>
        </Wrapper>
    );
};

interface Props {
    description?: string;
}

App.propTypes = {
    description: PropTypes.string,
};

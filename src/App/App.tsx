import { h, FunctionComponent } from 'preact';
import PropTypes from 'prop-types';
import { rootClass } from './App.styles';

export const App: FunctionComponent = (props: any) => (
    <h1 className={rootClass}>
        Hello {props.text} from Preact and Typescript!
    </h1>
);

(App as any).propTypes = {
    text: PropTypes.string.isRequired,
};

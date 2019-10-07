import { h, render } from 'preact';
import { App } from './App/App';
import './styles';

if ((module as any).hot) {
    require('preact/debug');
}

render(<App />, (document as any).getElementById('root'));

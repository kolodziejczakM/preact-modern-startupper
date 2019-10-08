import { h, render } from 'preact';
import { Provider } from 'unistore/preact';
import { store } from './store';
import { App } from './App/App';
import './styles';

if ((module as any).hot) {
    require('preact/debug');
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    (document as any).getElementById('root')
);

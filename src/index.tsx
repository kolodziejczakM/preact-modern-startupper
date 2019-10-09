import { h, render } from 'preact';
import { Provider } from 'unistore/preact';
import { store } from './store';
import { App } from './app/app';
import './styles';

if ((module as any).hot) {
    require('preact/debug');
}

render(
    <Provider store={store}>
        <App author="Marcin Kołodziejczak" />
    </Provider>,
    (document as any).getElementById('root')
);

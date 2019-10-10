import { h, render } from 'preact';
import { Provider } from 'unistore/preact';
import { store } from './store';
import { App } from './app/app';
import './styles';

if ((module as any).hot) {
    (module.hot as any).accept();
    require('preact/debug');
}

render(
    <Provider store={store}>
        <App description="Minimalistic, high-powered boilerplate" />
    </Provider>,
    (document as any).getElementById('root')
);

import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { StoreProvider } from '@preact-hooks/unistore';
import createStore from 'unistore';
import { App } from './app';

const storeMock = createStore({ count: 12 });

describe('App', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <StoreProvider value={storeMock}>
                <App description="This is test description" />
            </StoreProvider>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});

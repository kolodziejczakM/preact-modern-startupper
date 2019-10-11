import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { App } from './app';

describe('App', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <App description="This is test description" />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});

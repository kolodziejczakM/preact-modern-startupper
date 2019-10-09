import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/preact';
import { App } from './app';

describe('App', () => {
    it('should render correctly', () => {
        const { container } = render(App);

        expect(container).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });
});

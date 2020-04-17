import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { Button } from './button.component';

describe('Button', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Button>Hello!</Button>);

        expect(asFragment()).toMatchSnapshot();
    });
});

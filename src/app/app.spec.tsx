import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { AppComponent } from './app';

describe('App', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <AppComponent
                count={0}
                increment={(): void => {}}
                description="This is test description"
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});

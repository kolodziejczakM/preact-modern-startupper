import { h } from 'preact';
import scoped from 'scoped-style';

const styled = scoped(h);

export const HeadingText = styled('h1')`
    color: red;
    border: 3px solid hsla(185, 100%, 62%, 0.2);
`;

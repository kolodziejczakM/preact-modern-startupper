import { h } from 'preact';
import scoped from 'scoped-style';

const styled = scoped(h);

export const Container = styled('section')`
    padding: 10px;
    color: #000;
    border: 3px solid hsla(185, 100%, 62%, 0.2);
`;

export const AppDescription = styled('h1')`
    color: #0f0f0f;
`;

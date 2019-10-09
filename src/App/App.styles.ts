import { h } from 'preact';
import scoped from 'scoped-style';

const styled = scoped(h);

export const HeadingSection = styled('header')`
    color: #000;
    border: 3px solid hsla(185, 100%, 62%, 0.2);
`;

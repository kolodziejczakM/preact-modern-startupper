import { h } from 'preact';
import scoped from 'scoped-style';

const styled = scoped(h);

styled.global`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        font-style: italic;
    }
`;

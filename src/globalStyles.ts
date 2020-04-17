import { h } from 'preact';
import { setPragma, glob } from 'goober';
import { theme } from './common/theme';
setPragma(h);

// based on https://cssreset.com/scripts/eric-meyer-reset-css/
const resetCss = `
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button, input {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: ${theme.fontSizes.xs16};
        font: inherit;
        vertical-align: baseline;
        font-family: ${theme.fontFamilies.regular};
    }

    h1, h2, h3, h4, h5, h6, p, span, button, a {
        color: ${theme.colors.black};
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    
    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    html, body, #root {
        height: 100%;
        scroll-behavior: smooth;
    }
    
    #root {
        margin: 0 auto;
        max-width: 1920px;
    }
    
    .sanitized-translation strong {
        font-weight: bold;
    }

    * {
        box-sizing: border-box;
    }
`;

if (!document.getElementById('_goober')) {
    glob`${resetCss}`;
}

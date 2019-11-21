import { h } from 'preact';
import { setPragma, glob } from 'goober';

setPragma(h);

glob`
  html,
  body {
    background: #fff;
  }

  * {
    box-sizing: border-box;
  }
`;

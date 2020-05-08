import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography, media, stylelint } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('button')`
    ${typography.text16}
    padding: ${theme.spacing.xs6};
    min-width: 120px;
    max-width: 360px;
    text-transform: uppercase;
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadows.clickableItem};

    &:focus {
        border: none;
        outline: none;
    }

    &:active {
        box-shadow: none;
    }

    &:disabled {
        box-shadow: none;
        background: ${theme.colors.gray};
    }

    &:hover:enabled {
        cursor: pointer;
        text-decoration: underline;
    }

    ${media.gte(theme.breakpoints.s375)(stylelint.css`
        ${typography.text18}
    `)}
`;

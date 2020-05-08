import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme } from '@/common/theme';

setPragma(h);

export const Wrapper = styled('section')`
    display: grid;
    grid-row-gap: ${theme.spacing.xs6};
`;

import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { typography, theme } from '@/common/theme';

setPragma(h);

export const Wrapper = styled('section')``;

export const LogoWrapper = styled('div')`
    padding: ${theme.spacing.xs6};
    text-align: center;
    margin-bottom: ${theme.spacing.xs6};
`;

export const TitleWrapper = styled('div')`
    text-align: center;
`;

export const Title = styled('h1')`
    ${typography.text18}
`;

export const RoutesHeader = styled('header')`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: max-content;
    grid-column-gap: ${theme.spacing.xs6};
    margin-bottom: ${theme.spacing.xs6};
`;

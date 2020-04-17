enum colors {
    white = '#fff',
    black = '#000',
    gray = '#c0c0c0',
}

enum fontSizes {
    xs16 = '16px',
    s18 = '18px',
}

enum fontFamilies {
    regular = 'Arial',
}

export enum breakpoints {
    s375 = '375px',
}

enum spacing {
    xxs2 = '2px',
    xs6 = '6px',
}

enum lineHeights {
    xs21 = '21px',
    s23 = '23px',
}

enum zIndexes {
    xs = 1,
    s,
}

enum shadows {
    clickableItem = '0 2px 2px 0 rgba(0, 0, 0, 0.2)',
}

export const stylelint = {
    css: (strings: TemplateStringsArray, ...values: any[]): string =>
        strings.reduce(
            (acc: string, value: string, i: number) =>
                (acc += value + (values[i] || '')),
            ''
        ),
} as const;

export const media = {
    gte: (breakpoint: string) => (styles: string): string => `
    @media only screen and (min-width: ${breakpoint}) {
        ${styles}
    }
`,
    lte: (breakpoint: string) => (styles: string): string => `
    @media only screen and (max-width: ${breakpoint}) {
        ${styles}
    }
`,
} as const;

export const theme = {
    colors,
    breakpoints,
    fontSizes,
    lineHeights,
    fontFamilies,
    spacing,
    zIndexes,
    shadows,
} as const;

const text16 = stylelint.css`
    font-size: ${theme.fontSizes.xs16};
    line-height: ${theme.lineHeights.xs21};
`;

const text18 = stylelint.css`
    font-size: ${theme.fontSizes.s18};
    line-height: ${theme.lineHeights.s23};
`;

export const negative = (x: string): string => `-${x}`;

export const typography = {
    text16,
    text18,
} as const;

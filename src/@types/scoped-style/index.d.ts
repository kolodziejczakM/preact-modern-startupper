declare module 'scoped-style' {
    type RuleInserter = (css: string) => void;

    interface KeyframesCreator {
        // TODO:
    }
    interface GlobalCreator {
        // TODO:
        (...args: any[]): any;
    }

    interface Styled {
        (element: string): Function; // TODO: return type...
        keyframes: KeyframesCreator; // TODO:
        global: GlobalCreator; // TODO:
    }

    interface Scoped {
        (createElement: Function, callback?: RuleInserter): Styled;
        defaultCallback: RuleInserter;
        generateID: () => string;
    }

    const styled: Styled;
    const scoped: Scoped;

    export default scoped;
}

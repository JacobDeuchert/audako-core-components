import { Sheet, TWCallable } from 'twind';
export declare type Theme = {
    primary: string;
    'on-primary': string;
    secondary: string;
    'on-secondary': string;
    background: string;
    surface: string;
    'on-surface': string;
    'surface-border': string;
};
export declare class ThemingService {
    private _theme?;
    constructor(_theme?: Theme);
    createTwindContext(defaultContext?: boolean): {
        tw: TWCallable;
        styleSheet: Sheet<CSSStyleSheet>;
    };
    getTheme(): Theme;
    private _buildTwindThemeConfig;
}

import { create, cssomSheet, setup, type Sheet, tw, type TWCallable, type ThemeConfiguration } from 'twind';

export type Theme = {
  primary: string;
  'on-primary': string;
  secondary: string;
  'on-secondary': string;
  background: string;
  surface: string;
  'on-surface': string;
  'surface-border': string;
};

const defaultTheme: Theme = {
  primary: '#1D4ED8',
  'on-primary': '#ffffff',
  secondary: '#A9377A',
  'on-secondary': '#ffffff',
  background: '#EEEEEE',
  surface: '#ffffff',
  'on-surface': '#000000',
  'surface-border': '#CCCCCC',
};

export class ThemingService {
  constructor(private _theme?: Theme) {
    if (!_theme) {
      this._theme = this._theme ?? defaultTheme;
    }
  }

  public createTwindContext(defaultContext?: boolean): {tw: TWCallable, styleSheet: Sheet<CSSStyleSheet>} {
    if (defaultContext) {
      setup({
        theme: {
          extend: {
            colors: this._theme,
          },
        },
      });

      return {tw, styleSheet: null};
    } else {
      const styleSheet = cssomSheet({ target: new CSSStyleSheet() });
      const { tw } = create({
        sheet: styleSheet,
        theme: {
          extend: this._buildTwindThemeConfig(),
        },
      });
      return {tw, styleSheet};
    }
  }

  public getTheme(): Theme {
    return this._theme;
  }

  private _buildTwindThemeConfig(): ThemeConfiguration {
    return {
      colors: this._theme,
      boxShadow: {
        sm: '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
        md: '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
        lg: '0px 1.2px 3.6px rgba(0, 0, 0, 0.11), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13)',
        xl: '0px 4.8px 14.4px rgba(0, 0, 0, 0.18), 0px 25.6px 57.6px rgba(0, 0, 0, 0.22)',
      },
    }
  }
}

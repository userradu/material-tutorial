import { Component, ViewEncapsulation } from '@angular/core';
import { StyleManagerService } from './style-manager.service';
import { DocsSiteTheme, ThemeStorageService } from './theme-storage.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThemePickerComponent  {
  currentTheme!: DocsSiteTheme;

  themes: DocsSiteTheme[] = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      displayName: 'Light Theme',
      name: 'light-theme',
      isDark: false,
      isDefault: true
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      displayName: 'Dark Theme',
      name: 'dark-theme',
      isDark: true,
    }
  ];

  constructor
  (
    public styleManager: StyleManagerService,
    private _themeStorage: ThemeStorageService,
  ) {
    const themeName = this._themeStorage.getStoredThemeName();
    if (themeName) {
      this.selectTheme(themeName);
    }
  }

  selectTheme(themeName: string) {
    const theme = this.themes.find(currentTheme => currentTheme.name === themeName);

    if (!theme) {
      return;
    }

    this.currentTheme = theme;

    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle('theme', `assets/${theme.name}.css`);
    }

    if (this.currentTheme) {
      this._themeStorage.storeTheme(this.currentTheme);
    }
  }
}

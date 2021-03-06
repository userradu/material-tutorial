import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StyleManagerService } from './style-manager.service';
import { SiteTheme, ThemeStorageService } from './theme-storage.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThemePickerComponent implements OnInit  {
  currentTheme!: SiteTheme;
  isDarkModeEnabled = false;

  themes: SiteTheme[] = [
    {
      name: 'light-theme',
      isDefault: true
    },
    {
      name: 'dark-theme'
    }
  ];

  constructor(
    public styleManagerService: StyleManagerService,
    private themeStorageService: ThemeStorageService,
  ) { }

  ngOnInit() {
    const themeName = this.themeStorageService.getStoredThemeName();
    if (themeName) {
      this.installTheme(themeName);
      if (themeName === 'light-theme') {
        this.isDarkModeEnabled = false;
      } else {
        this.isDarkModeEnabled = true;
      }
    }
  }

  installTheme(themeName: string) {
    const theme = this.themes.find(currentTheme => currentTheme.name === themeName);

    if (!theme) {
      return;
    }

    this.currentTheme = theme;

    if (theme.isDefault) {
      this.styleManagerService.removeStyle('theme');
    } else {
      this.styleManagerService.setStyle('theme', `assets/${theme.name}.css`);
    }

    if (this.currentTheme) {
      this.themeStorageService.storeTheme(this.currentTheme);
    }
  }

  onThemeSelectorChange() {
    this.isDarkModeEnabled = !this.isDarkModeEnabled;
    this.installTheme(this.isDarkModeEnabled ? 'dark-theme' : 'light-theme');
  }
}

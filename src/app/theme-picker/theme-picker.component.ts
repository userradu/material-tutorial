import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ThemeService } from 'ng2-charts';
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
    private chartsThemeService: ThemeService
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

    this.themeStorageService.storeTheme(this.currentTheme);
    this.updateChartsTheme(this.currentTheme.name);
  }

  onThemeSelectorChange() {
    this.isDarkModeEnabled = !this.isDarkModeEnabled;
    this.installTheme(this.isDarkModeEnabled ? 'dark-theme' : 'light-theme');
  }

  updateChartsTheme(theme: string) {
    let overrides: ChartOptions;
    if (theme === 'dark-theme') {
      overrides = {
        legend: {
          labels: { fontColor: 'white' }
        },
        scales: {
          xAxes: [{
            ticks: { fontColor: 'white' },
            gridLines: { color: 'rgba(255,255,255,0.1)' }
          }],
          yAxes: [{
            ticks: { fontColor: 'white' },
            gridLines: { color: 'rgba(255,255,255,0.1)' }
          }]
        }
      };
    } else {
      overrides = {};
    }
    this.chartsThemeService.setColorschemesOptions(overrides);
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeStorageService } from '../theme-picker/theme-storage.service';
import { ThemingService } from '../theming.service';

@Component({
  selector: 'app-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThemeChangerComponent implements OnInit {

  primaryColor = '#fff';
  secondaryColor = '#fff';
  warnColor = '#fff';
  currentTheme = new FormControl();

  constructor(
    private themingService: ThemingService,
    private themeStorageService: ThemeStorageService
  ) { }

  ngOnInit(): void {
    const currentTheme = this.themeStorageService.getStoredThemeName();

    if (currentTheme) {
      this.currentTheme.setValue(currentTheme);
    } else {
      this.currentTheme.setValue('light-theme');
    }
  }

  setColor(color: string, colorType: 'primary' | 'secondary' | 'warn') {
    this.themingService.setColor(color, colorType, this.currentTheme.value);
  }
}

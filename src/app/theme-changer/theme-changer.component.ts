import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ThemingService } from '../theming.service';

@Component({
  selector: 'app-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.scss']
})
export class ThemeChangerComponent implements OnInit {

  primaryColor = "#fff";
  secondaryColor = "#fff";
  warnColor = "#fff";

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private themingService: ThemingService
  ) { }

  ngOnInit(): void { }

  setColor(color: string, colorType: 'primary' | 'secondary' | 'warn') {
    const prefix = {
      primary: '--theme-primary-color',
      secondary: '--theme-accent-color',
      warn: '--theme-warn-color'
    };

    const colorPalette = this.themingService.generateColorPalette(color);

    for (const colorConfig of colorPalette) {
      const {colorVariant, colorHexValue, shouldHaveDarkContrast} = colorConfig;

      const colorVariableName = `${prefix[colorType]}-${colorVariant}`;
      this.setColorVariable(colorVariableName, colorHexValue);

      const contrastedColorVariableName = `${prefix[colorType]}-contrast-${colorVariant}`;
      const contrastedColorValue = shouldHaveDarkContrast ? '#000' : '#fff';
      this.setColorVariable(contrastedColorVariableName, contrastedColorValue);
    }
  }

  setColorVariable(variable: string, color: string) {
    this.document.documentElement.style.setProperty(variable, color);
  }
}

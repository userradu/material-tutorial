import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as tinycolor from 'tinycolor2';

export interface ColorConfig {
  colorVariant: string;
  colorHexValue: string;
  shouldHaveDarkContrast: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  generateColorPalette(hexColor: string): ColorConfig[] {
    const baseLight = tinycolor('#ffffff');
    const baseDark = this.multiply(tinycolor(hexColor).toRgb(), tinycolor(hexColor).toRgb());
    const baseTriad = tinycolor(hexColor).tetrad();

    return [
      this.mapColorConfig(tinycolor.mix(baseLight, hexColor, 12), '50'),
      this.mapColorConfig(tinycolor.mix(baseLight, hexColor, 30), '100'),
      this.mapColorConfig(tinycolor.mix(baseLight, hexColor, 50), '200'),
      this.mapColorConfig(tinycolor.mix(baseLight, hexColor, 70), '300'),
      this.mapColorConfig(tinycolor.mix(baseLight, hexColor, 85), '400'),
      this.mapColorConfig(tinycolor.mix(baseLight, hexColor, 100), '500'),
      this.mapColorConfig(tinycolor.mix(baseDark, hexColor, 87), '600'),
      this.mapColorConfig(tinycolor.mix(baseDark, hexColor, 70), '700'),
      this.mapColorConfig(tinycolor.mix(baseDark, hexColor, 54), '800'),
      this.mapColorConfig(tinycolor.mix(baseDark, hexColor, 25), '900'),
      this.mapColorConfig(tinycolor.mix(baseDark, baseTriad[3], 15).saturate(80).lighten(65), 'A100'),
      this.mapColorConfig(tinycolor.mix(baseDark, baseTriad[3], 15).saturate(80).lighten(55), 'A200'),
      this.mapColorConfig(tinycolor.mix(baseDark, baseTriad[3], 15).saturate(100).lighten(45), 'A400'),
      this.mapColorConfig(tinycolor.mix(baseDark, baseTriad[3], 15).saturate(100).lighten(40), 'A700')
    ];
  }

  private multiply(rgb1: tinycolor.ColorFormats.RGB, rgb2: tinycolor.ColorFormats.RGB): tinycolor.Instance {
    rgb1.r = Math.floor(rgb1.r * rgb2.r / 255);
    rgb1.g = Math.floor(rgb1.g * rgb2.g / 255);
    rgb1.b = Math.floor(rgb1.b * rgb2.b / 255);
    const {r, g, b} = rgb1;

    return tinycolor(`rgb ${r} ${g} ${b}`);
  }

  private mapColorConfig(tinyColorInstance: tinycolor.Instance, colorVariant: string): ColorConfig {
    return {
      colorVariant,
      colorHexValue: tinyColorInstance.toHexString(),
      shouldHaveDarkContrast: tinyColorInstance.isLight()
    };
  }

  setColor(color: string, colorType: 'primary' | 'secondary' | 'warn', theme: 'light-theme' | 'dark-theme') {
    const prefix = {
      primary: `--${theme}-primary-color`,
      secondary: `--${theme}-accent-color`,
      warn: `--${theme}-warn-color`
    };

    const colorPalette = this.generateColorPalette(color);

    for (const colorConfig of colorPalette) {
      const {colorVariant, colorHexValue, shouldHaveDarkContrast} = colorConfig;

      const colorVariableName = `${prefix[colorType]}-${colorVariant}`;
      this.setColorVariable(colorVariableName, colorHexValue);
      console.log(`${colorVariableName}: #${colorHexValue}`);

      const contrastedColorVariableName = `${prefix[colorType]}-contrast-${colorVariant}`;
      const contrastedColorValue = shouldHaveDarkContrast ? '#000' : '#fff';
      console.log(`${contrastedColorVariableName}: #${contrastedColorValue}`);
      this.setColorVariable(contrastedColorVariableName, contrastedColorValue);
    }
  }

  private setColorVariable(variable: string, color: string) {
    this.document.documentElement.style.setProperty(variable, color);
  }
}

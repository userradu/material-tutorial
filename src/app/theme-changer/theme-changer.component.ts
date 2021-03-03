import { Component, OnInit } from '@angular/core';
import { ColorConfig, ThemingService } from '../theming.service';

@Component({
  selector: 'app-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.scss']
})
export class ThemeChangerComponent implements OnInit {

  color = "#fff";
  theme!: ColorConfig[];

  constructor(private themingService: ThemingService) { }

  ngOnInit(): void {
  }

  onColorChanged(color: string) {
    this.theme = this.themingService.generateColorPalette(color);
  }

}

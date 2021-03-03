import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ThemingService } from '../theming.service';

@Component({
  selector: 'app-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.scss']
})
export class ThemeChangerComponent implements OnInit {

  primaryColor = this.themingService.defaultPrimary;
  secondaryColor = this.themingService.defaultSecondary;
  warnColor = this.themingService.defaultWarn;

  constructor(private themingService: ThemingService) { }

  ngOnInit(): void { }

  setColor(color: string, colorType: 'primary' | 'secondary' | 'warn') {
    this.themingService.setColor(color, colorType);
  }
}

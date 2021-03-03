import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Inject, Renderer2 } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ThemingService } from './theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links: string[] = [];

  darkThemeEnabled = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private overlayContainer: OverlayContainer,
    private themingService: ThemingService
  ) {

  }

  ngOnInit() {
    this.themingService.setDefaultTheme();

    this.switchTheme(false);

    for(let i = 1; i <= 100; i++) {
      this.links.push('Link ' + i);
    }
  }

  switchTheme(enableDarkTheme: boolean) {
    this.darkThemeEnabled = enableDarkTheme;
    if (this.darkThemeEnabled) {
      this.renderer.removeClass(document.body, 'light-theme');
      this.renderer.addClass(document.body, 'dark-theme');

      // this.overlayContainer.getContainerElement().classList.remove('light-theme');
      // this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      this.renderer.addClass(document.body, 'light-theme');

      // this.overlayContainer.getContainerElement().classList.remove('dark-theme');
      // this.overlayContainer.getContainerElement().classList.add('light-theme');
    }
  }
}

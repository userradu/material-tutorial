import { DOCUMENT } from '@angular/common';
import { Inject, Renderer2 } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links: string[] = [];

  darkThemeEnabled = false;

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {

  }

  ngOnInit() {
    for(let i = 1; i <= 100; i++) {
      this.links.push('Link ' + i);
    }
  }

  switchTheme(enableDarkTheme: boolean) {
    this.darkThemeEnabled = enableDarkTheme;
    if (this.darkThemeEnabled) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}

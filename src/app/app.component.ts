import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links: string[] = [];
  font = new FormControl('Montserrat');

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    for(let i = 1; i <= 100; i++) {
      this.links.push('Link ' + i);
    }

    this.font.valueChanges.subscribe(font => {
      this.document.documentElement.style.setProperty('--font-family', font);
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links: string[] = [];

  constructor() { }

  ngOnInit() {
    for(let i = 1; i <= 100; i++) {
      this.links.push('Link ' + i);
    }
  }
}

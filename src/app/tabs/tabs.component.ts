import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

}

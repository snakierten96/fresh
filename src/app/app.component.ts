import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { INavItem, NAVITEMS } from './app-navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title: string = 'app works!';
  navItems: INavItem[] = NAVITEMS;

  constructor() {}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    
  }

}

import {Component} from '@angular/core';

interface ITab {
  title?: string;
  path: string;
  currentIcon: string;
  activeIcon: string;
  inactiveIcon: string;
}

@Component({
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {

  tabOptions: ITab[] = [
    {title: 'Inicio', path: 'dashboard', currentIcon: '', activeIcon: 'home', inactiveIcon: 'home-outline'},
    {title: 'QR', path: 'qr', currentIcon: '', activeIcon: 'qr-code', inactiveIcon: 'qr-code-outline'},
    {title: 'Map', path: 'map', currentIcon: '', activeIcon: 'map', inactiveIcon: 'map-outline'},
  ];

  onTabsDidChange(event: { tab: string; }) {
    const tabSelected = event.tab;
    this.tabOptions.forEach(t => {
      if (t.path === tabSelected) {
        t.currentIcon = t.activeIcon;
      } else {
        t.currentIcon = t.inactiveIcon;
      }
    });
  }

}

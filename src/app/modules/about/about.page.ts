import { Component, OnInit } from '@angular/core';
import DeviceUtil from '../../shared/utilities/DeviceUtil';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  appVersion: string;

  constructor() { }

  ngOnInit() {
    DeviceUtil.info().then(info => this.appVersion = info.appVersion);
  }

}

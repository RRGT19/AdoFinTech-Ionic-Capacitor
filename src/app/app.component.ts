import {Component} from '@angular/core';
import {Plugins} from '@capacitor/core';

const {SplashScreen} = Plugins;

interface IMenu {
  title?: string;
  icon: string;
  path?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  splitMenus: IMenu[] = [
    {title: 'Acerca de', path: 'about', icon: 'assets/icons/ic-about.png'},
  ];

  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    /* To make sure we provide the fastest app loading experience
       for our users, hide the splash screen automatically
       when the app is ready to be used:
       https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
    */
    SplashScreen.hide();
  }

}

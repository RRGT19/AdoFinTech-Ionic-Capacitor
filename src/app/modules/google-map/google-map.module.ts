import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {GoogleMapPageRoutingModule} from './google-map-routing.module';
import {GoogleMapPage} from './google-map.page';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsApiKey
    })
  ],
  declarations: [GoogleMapPage]
})
export class GoogleMapPageModule {
}

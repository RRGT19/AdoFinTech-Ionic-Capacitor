import {Component, OnInit} from '@angular/core';
import {Plugins} from '@capacitor/core';
import DeviceUtil from '../../shared/utilities/DeviceUtil';

const {Toast} = Plugins;

declare const google: any;

interface IMarker {
  name: string;
  lat: number;
  lng: number;
  iconUrl?: string;
}

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.page.html',
  styleUrls: ['./google-map.page.scss'],
})
export class GoogleMapPage implements OnInit {

  map: any;

  // google maps zoom level
  zoom = 8;

  // initial center position for the map
  lat = 18.983402;
  lng = -69.929611;

  markers: IMarker[] = [
    {lat: 18.45320391075167, lng: -69.94411976057009, name: 'Banco X', iconUrl: 'assets/icon/marker.png'},
    {lat: 18.587185027509687, lng: -69.9240568379474, name: 'Colmado X'},
    {lat: 18.371298770797907, lng: -70.16026289136909, name: 'Torre X'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  mapReady(event: any) {
    this.map = event;
    this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(document.getElementById('center'));
  }

  async clickedMarker(marker: IMarker, index: number) {
    await Toast.show({
      text: marker.name
    });
  }

  async center() {
    if (this.map) {
      // Option 1. Center in country.
      // this.map.setCenter({ lat: this.lat, lng: this.lng });

      // Option 2. Get the user location.
      const geoData = await DeviceUtil.getCurrentPosition();
      await Toast.show({
        text: geoData.coords.latitude + ', ' + geoData.coords.longitude
      });
      this.map.setCenter({lat: geoData.coords.latitude, lng: geoData.coords.longitude});
    }
  }

}

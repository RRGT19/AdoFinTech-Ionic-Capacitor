import {DeviceInfo, GeolocationPosition, Plugins} from '@capacitor/core';

const {Browser, Device, Geolocation} = Plugins;

export default class DeviceUtil {

  /**
   * Open an in-app browser session to show external web content.
   * Documentation: https://capacitorjs.com/docs/apis/browser
   */
  static async goToUrl(webUrl: string) {
    if (!webUrl) {
      return;
    }

    await Browser.open({
      url: webUrl,
      toolbarColor: '#00abc7',
      // iOS only
      presentationStyle: 'popover',
    });
  }

  /**
   * Get internal information about the device.
   * Documentation: https://capacitorjs.com/docs/apis/device
   */
  static info(): Promise<DeviceInfo> {
    return Device.getInfo();
  }

  /**
   * Get the current position of the device using GPS.
   * Documentation: https://capacitorjs.com/docs/apis/geolocation
   */
  static getCurrentPosition(): Promise<GeolocationPosition> {
    return Geolocation.getCurrentPosition();
  }

}

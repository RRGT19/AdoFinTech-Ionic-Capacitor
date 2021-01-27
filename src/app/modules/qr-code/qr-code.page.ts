import {Component, OnInit} from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  code: any;

  constructor(
    private barcodeScanner: BarcodeScanner
  ) {
  }

  ngOnInit() {
  }

  scan() {
    this.barcodeScanner.scan({prompt: 'Scan the QR code'}).then(barcodeData => {
      this.code = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }

}

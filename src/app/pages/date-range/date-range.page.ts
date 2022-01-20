import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.page.html',
  styleUrls: ['./date-range.page.scss'],
})
export class DateRangePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismissMod () {
    this.modalCtrl.dismiss();
  }

}

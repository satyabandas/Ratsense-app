import { Component, OnInit, ViewChild } from '@angular/core';
// import { IonDatetime } from '@ionic/angular';
import { Router } from '@angular/router';
// import { format, parseISO } from 'date-fns';
import { ModalController } from '@ionic/angular';

import { DateRangePage } from './../date-range/date-range.page';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-zonemap',
  templateUrl: './zonemap.page.html',
  styleUrls: ['./zonemap.page.scss'],
})
export class ZonemapPage implements OnInit {

  //@ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  //formatDate(value: string) {
  //  return format(parseISO(value), 'MMM dd yyyy');
  //}

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: '#ffffff',
      width: 400,
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
    },
    title: {
      text: 'Test Chart'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [
      {
        type: "pie",
        data: [{
          name: 'Slice 1',
          y: 20
        }, {
          name: 'Slice 2',
          y: 30
        }, {
          name: 'Slice 3',
          y: 15
        }, {
          name: 'Slice 4',
          y: 25
        }]
      }
    ]
  };

  constructor(private router: Router, private modalCtrl: ModalController){}

  async showDates () {
    const modal = await this.modalCtrl.create({
      component: DateRangePage
    })

    await modal.present();
  }

  ngOnInit() {
  }

  navigate(){
    this.router.navigate(['/loginform'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor(private alertController : AlertController, private router: Router) { }

  ngOnInit() {
  }

  showAlert() {
    this.alertController.create({
      cssClass: 'cust-alert',
      header: '',
      subHeader: '',
      message: 'Thank you for submitting your Feedback.',
      buttons: [{
      text: 'OK',
      handler: () => {
        this.router.navigate(['zonemap'])
      }
      }]
    }).then(res => {
      res.present();

    });

  }

  openCamera (){
    this.alertController.create({
      cssClass: 'cust-alert',
      header: '',
      subHeader: '',
      message: 'Camera/Gallery feature implementation done here.',
      buttons: ['OK']
    }).then(res => {
      res.present();

    });
  }

}

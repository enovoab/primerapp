import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  n1:number=0;
  n2:number=0;

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }


  async onClick() {
    let res=this.n1+this.n2;
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: res.toString(),
      buttons: ['OK']
    }
    );
    await alert.present();
}}

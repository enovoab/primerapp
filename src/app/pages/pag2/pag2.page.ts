import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],
})
export class Pag2Page implements OnInit {

  usuario={
    username:'',
    password:''
  }

  personas=[{
    nombre:"Wacoldo",
    apellido:"Soto",
    srcimagen: "../assets/images/personita.jpg"
  },
  
]
onSubmit(){
  console.log(this.usuario.username + " " + this.usuario.password)

  if(this.usuario.username==="eduardo" && this.usuario.password=="123")
  {
    console.log(this.usuario.username + " " + this.usuario.password)
    let naveextras:NavigationExtras=
    {
      state: {
        miusuario:this.usuario}
    }
    this.router.navigate(["/home"],naveextras);
  }
  else{
    this.presentAlert();
  }
}
  constructor(private alertController:AlertController,private router:Router) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'Error en iniciar seccion',
      message: 'Ingresar un usuario valido',
      buttons: ['OK']
    });

    await alert.present();
}
}
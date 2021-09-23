import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario:string='';

  constructor(private activerouter:ActivatedRoute,private router:Router) {
    this.activerouter.queryParams.subscribe
    (params=>{
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.miusuario.username;
        console.log(this.usuario);
      }
    }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
user: User;
  constructor() { }

  ngOnInit(): void {
    this.user=new User();
  }
  connexion()
  {
    if((this.user.email=="admin@gmail.com")||(this.user.mdp=="admin"))
    {
window.location.replace("inscription");

    }
    else
    {
      alert("compte non reconnue!");
    }
  }

}

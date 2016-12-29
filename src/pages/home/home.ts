import { Component } from '@angular/core';
import { Dxplor } from '../../providers/dxplor';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Dxplor]
})
export class HomePage {
  public foundRepos;
  public username;
  public password;

  constructor(public navCtrl: NavController, private dxplor: Dxplor) {
    
  }

  getRepos(){
    this.dxplor.getGithubRepos(this.username).subscribe(
      data => {
          this.foundRepos = data.json();
      },
      err => console.error(err),
      () => console.log('getRepos completed')
    );
  }

  loginCustomer(){
    this.dxplor.sendLoginData(this.username, this.password).subscribe(
      data => {
          this.foundRepos = data.json();
          console.log(this.foundRepos);
      },
      err => console.log(err),
      () => console.log('login completed')
    );
  }

  //*ngFor="let repo of foundRepos"

}

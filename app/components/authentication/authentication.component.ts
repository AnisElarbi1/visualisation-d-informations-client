import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  private login: string;
  private motDePasse: string;
  errorMessage = 'Veuillez vérifier vos coordonnées.';
  invalidLogin = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  authenticate() {
    if (this.authenticationService.authenticate(this.login, this.motDePasse)) {
      this.router.navigate(['clients']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}

import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }

  authenticate(login, password) {

    if (login === 'jump' && password === 'jump') {
      sessionStorage.setItem(environment.utilisateur, login);
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem(environment.utilisateur);
  }

  isUserLoggedIn() {
    const utilisateur = sessionStorage.getItem(environment.utilisateur);
    return !(utilisateur === null);
  }


}

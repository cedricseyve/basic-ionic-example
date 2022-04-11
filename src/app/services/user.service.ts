import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';

import {IUser} from '../models/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: IUser = {
    idPersonne: 7741,
    nomPersonne: 'Andrey',
    prenomPersonne: 'Aurélien',
    idApplication: 1,
    libelleApplication: 'Salaires & Gratifications',
    urlApplication: 'https://appsasgr.leon-grosse.fr/asgr',
    codeProfil: 'notRD',
    idPersonneDelegue: null,
    nomPersonneDelegue: null,
    prenomPersonneDelegue: null,
  };

  constructor() {}

  getUser(): Observable<IUser> {
    return from([this.user]);
  }
}

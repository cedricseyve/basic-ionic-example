import {Injectable} from '@angular/core';
import {from, Observable, Subject} from 'rxjs';

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

  private userChanges = new Subject<IUser>();

  constructor() {}

  getUser(): Observable<IUser> {
    return from([this.user]);
  }

  getUserChanges(): Observable<IUser> {
    return this.userChanges;
  }

  // only used to mock data
  setAdmin() {
    this.user.codeProfil = 'RD';
    this.userChanges.next(this.user);
  }

  setUser() {
    this.user.codeProfil = 'notRD';
    this.userChanges.next(this.user);
  }
}

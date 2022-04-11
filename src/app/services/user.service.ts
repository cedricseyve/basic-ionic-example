import {Injectable} from '@angular/core';
import {from, Observable, Subject} from 'rxjs';

import {Features, IFeaturePermission, Permission} from '../models/IPermission';
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
  private mockedAdminRights: IFeaturePermission[] = [
    {
      feature: Features.Tab1,
      permission: Permission.Admin,
    },
    {
      feature: Features.Tab2,
      permission: Permission.Admin,
    },
    {
      feature: Features.Card1,
      permission: Permission.Admin,
    },
    {
      feature: Features.Card2,
      permission: Permission.Admin,
    },
    {
      feature: Features.Card3,
      permission: Permission.Admin,
    },
  ];

  private mockedUserRights: IFeaturePermission[] = [
    {
      feature: Features.Tab1,
      permission: Permission.View,
    },
    {
      feature: Features.Tab2,
      permission: Permission.None,
    },
    {
      feature: Features.Card1,
      permission: Permission.View,
    },
    {
      feature: Features.Card2,
      permission: Permission.View,
    },
    {
      feature: Features.Card3,
      permission: Permission.View,
    },
  ];

  private userChanges = new Subject<IUser>();

  constructor() {}

  getUser(): Observable<IUser> {
    return from([this.user]);
  }

  // This is used for mocking purposes.
  // We should call our back-end to fetch our user's permissions for his profile.
  getUserPermissions(userProfile: string): Observable<IFeaturePermission[]> {
    if (userProfile === 'RD') {
      return from([this.mockedAdminRights]);
    } else {
      return from([this.mockedUserRights]);
    }
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

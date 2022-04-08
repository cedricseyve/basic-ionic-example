import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ILgCard } from 'src/app/models/ILgCard';
import { LgCardApiService } from 'src/app/services/lg-card-api.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public lgCardDatas: ILgCard[];

  public themeColor = [
    {name: 'Default', class: 'default'},
    {name: 'Dark', class: 'dark-theme'},
    {name: 'Purple', class: 'purple'},
    {name: 'Green', class: 'green'},
  ];
  public selectTheme;
  constructor(private theme: ThemeService, private lgCardApiService: LgCardApiService) {
    this.selectTheme = 'default';
    this.dynamicTheme();
  }

  dynamicTheme() {
    this.theme.activeTheme(this.selectTheme);
  }

  ngOnInit(): void {
    this.lgCardApiService
      .getLGCardData()
      .pipe(tap(lgCardDatas => (this.lgCardDatas = lgCardDatas)))
      .subscribe();
  }

  selectGreenTheme() {
    this.selectTheme = this.themeColor[3].class;
  }
}

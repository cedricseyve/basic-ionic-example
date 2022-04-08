import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { ILgCard } from '../models/ILgCard';

@Injectable({
  providedIn: 'root',
})
export class LgCardApiService {
  private mockedLgCard: ILgCard[] = [
    {
      title: 'Card Title',
      subtitle: 'Card Subtitle',
      content: 'Some text dispayed within the basic card example.',
    },
    {
      title: 'Custom card Title',
      subtitle: 'Custom Card Subtitle',
      content: 'More text displayed within the custom component card',
    },
    {
      title: 'Tab1 card Title',
      subtitle: 'Tab1 Card Subtitle',
      content: 'A card component specific to the Tab1 page',
    },
  ];
  constructor() {}

  public getLGCardData(): Observable<ILgCard[]> {
    return from([this.mockedLgCard]).pipe(take(1));
  }
}

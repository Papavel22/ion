import { Component } from '@angular/core';
import { Beast } from './types/types';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public names = '';
  public beasts: Beast.IBeast[] = [
    {
      name: 'Bear',
      description: 'Big and angry dick in your mouth bitch',
      age: 3,
      family : {
        type: Beast.EType.BAGGINS,
        oreol: Beast.EOreol.WOODS,
        characteristics: {
          size: 'big',
          food: [Beast.EFood.MEAT, 'fish', 'you'],
        },
      },
    },
    {
      name: 'megaladon',
      description: 'Very fucking big shark',
      age: 100,
      family : {
        type: 'god',
        oreol: ['seas', 'oceans'],
        characteristics: {
          size: 'Very big',
          food: 'all',
        },
      },
    },
    {
      name: 'horse',
      description: 'Really scary animal like an maniac',
      age: 1,
      family : {
        type: 'demons',
        oreol: ['woods', 'fields','MacDonalds'],
        characteristics: {
          size: ['small', 'very small'],
          food: 'Fears of Pavel',
        },
      },
    },
  ];

  constructor() {}
 public takeNames(names) {
    this.names = names;
 }
}

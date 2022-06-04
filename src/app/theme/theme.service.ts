import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  colorObject: any = {
    '--background': 'red',
    '--text-color': '#0F0F0F',
  }
  private activeThem = new BehaviorSubject(this.colorObject);

  constructor() { }

  public getActiveTheme() {
    console.log('this.activeThem', this.activeThem);

    return this.activeThem.asObservable();
  }

  public setActiveThem(name: any) {
    this.activeThem.next(name);
  }
}

import { Directive, ElementRef, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { themes } from './themes.const';
import { ThemeService } from './theme.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnInit, OnDestroy {

  private themeName: any = {
    '--background': 'red',
    '--text-color': '#0F0F0F',
  };
  private themServiceSubscription!: Subscription;
  constructor(private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: any,
    private themService: ThemeService) { }

  ngOnInit() {
    console.log('this.themeName', this.themeName);
    this.updateTheme(this.themeName);
    this.themService.getActiveTheme()
      .subscribe(themeName => {
        console.log('themeName', themeName);

        this.themeName = themeName;
        this.updateTheme(this.themeName);

      });
  }

  updateTheme(themeName: any) {
    const element = this.elementRef.nativeElement;
    const them: any = themeName;
    console.log('them1', them);

    for (const key in them) {
      console.log('key', key);

      console.log('theme22', them[key]);

      element.style.setProperty(key, them[key]);
      this.document.body.style.setProperty(key, them[key]);
    }
  }

  ngOnDestroy() {
    if (this.themServiceSubscription) this.themServiceSubscription.unsubscribe();
  }

}

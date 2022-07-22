import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-theming';
  is_theme_shown: boolean = false;
  constructor() {
  }

  toggleThem() {
    this.is_theme_shown = !this.is_theme_shown
    document.documentElement.style.setProperty('--background', this.is_theme_shown ? 'red' : 'yellow');
  }
}

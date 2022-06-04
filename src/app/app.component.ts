import { Component } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-theming';
  activeThem: any = {
    '--background': 'aliceblue',
    '--text-color': '#0F0F0F',
  };
  oceanBlueThemProps: any = {
    '--background': 'aliceblue',
    '--text-color': '#0F0F0F',
  }
  constructor(private themService: ThemeService) {

    this.themService.setActiveThem(this.oceanBlueThemProps);

  }

  toggleThem() {
    // refactor this ugly code :) for demo only
    if (this.activeThem !== 'deepPurpleThemProps') {
      this.oceanBlueThemProps['--background'] = 'red'
      this.themService.setActiveThem(this.oceanBlueThemProps);
      // this.themService.setActiveThem('deepPurpleThemProps');
      this.activeThem = 'deepPurpleThemProps';
    } else {
      this.oceanBlueThemProps['--background'] = 'blue'
      this.themService.setActiveThem(this.oceanBlueThemProps);
      // this.themService.setActiveThem('oceanBlueThemProps');
      this.activeThem = 'oceanBlueThemProps';
    }
  }
}

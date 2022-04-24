import { Component } from '@angular/core';
import { CounterService } from "./shared/counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngSchulte Table';

  constructor(public gService: CounterService) {
  }

  onClick() {
    if (this.gService.isStarted()) {
      this.gService.stop();
    } else {
      this.gService.start();
    }
  }

  refresh() {
    this.gService.stop();
    this.gService.start();
  }
}

// deploy:
// https://github.com/angular-schule/angular-cli-ghpages#base-href
// https://www.c-sharpcorner.com/blogs/a-guide-on-how-to-deploy-angular-applications-to-github-pages

// TODO: update service
// https://medium.com/innoventes/angular-pwa-and-app-update-1cfbf9c78da0

// How to change Angular PWA app name, splash screen name & icon
// https://shahc9437.medium.com/how-to-change-angular-pwa-app-name-splash-screen-name-icon-628387d95c72

// ICON SET GENERATORS
// https://tools.crawlink.com/tools/pwa-icon-generator/
// https://www.pwabuilder.com/imageGenerator

// FAVICON GENERATOR
// https://realfavicongenerator.net/

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
}

// deploy:
// https://github.com/angular-schule/angular-cli-ghpages#base-href
// https://www.c-sharpcorner.com/blogs/a-guide-on-how-to-deploy-angular-applications-to-github-pages

import { Component } from '@angular/core';
import { MetaDataService } from './services/meta-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'srujan-financial';

  // injected here so canonical URLs are kept up to date on every navigation
  constructor(private metaData: MetaDataService) {}
}

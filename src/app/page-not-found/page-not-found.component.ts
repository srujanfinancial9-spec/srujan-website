import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MetaDataService } from '../services/meta-data.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  constructor(metaData: MetaDataService) {
    metaData.setMetaData(
      'Page Not Found | Srujan Financial Services',
      'The page you are looking for could not be found on the Srujan Financial Services website.',
      true
    )
  }
}

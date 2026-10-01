import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MetaDataService } from '../services/meta-data.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent{
  constructor(metaData: MetaDataService) {
    metaData.setMetaData(
      'Style Guide | Srujan Financial Services',
      'Internal style guide for the Srujan Financial Services website.',
      true
    )
  }
}

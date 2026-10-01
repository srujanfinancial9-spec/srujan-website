import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MetaDataService } from '../services/meta-data.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent  {
  constructor(metaData: MetaDataService) {
    metaData.setMetaData(
      'Disclaimer | Srujan Financial Services',
      'Read the disclaimer for the Srujan Financial Services website and the information published on it.'
    )
  }
}

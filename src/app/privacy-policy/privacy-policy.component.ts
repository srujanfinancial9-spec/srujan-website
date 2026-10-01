import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MetaDataService } from '../services/meta-data.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  constructor(metaData: MetaDataService) {
    metaData.setMetaData(
      'Privacy Policy & Client Confidentiality | Srujan Financial Services',
      'How Srujan Financial Services collects, uses and protects your personal information, and how to contact us about privacy and client confidentiality.'
    )
  }
}

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MetaDataService } from '../services/meta-data.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-disclosure',
  templateUrl: './disclosure.component.html',
  styleUrls: ['../privacy-policy/privacy-policy.component.scss', './disclosure.component.scss']
})
export class DisclosureComponent {
  constructor(metaData: MetaDataService) {
    metaData.setMetaData(
      'Disclosures | Srujan Financial Services LLP',
      'Regulatory disclosures for Srujan Financial Services LLP (ARN-86804): nature of services, commission and brokerage structure, empanelled AMCs and grievance redressal.'
    )
  }

  saiUrl = 'https://www.amfiindia.com/otherdata/statement-of-Additional-Information';

  // Brokerage structure documents as issued by each AMC, served from assets/documents/brokerage
  amcs = [
    { name: 'ABSL', period: '01 Aug 2026 to 31 Oct 2026', file: 'absl.pdf' },
    { name: 'Axis', period: '01 Aug 2026 to 31 Aug 2026', file: 'axis.pdf' },
    { name: 'Bandhan', period: '', file: 'bandhan.pdf' },
    { name: 'Canara Robeco', period: '01 Jul 2026 to 30 Sep 2026', file: 'canara-robeco.pdf' },
    { name: 'DSP', period: '01 Jul 2026 to 30 Sep 2026', file: 'dsp.pdf' },
    { name: 'Edelweiss', period: '01 Jul 2026 to 30 Sep 2026', file: 'edelweiss.pdf' },
    { name: 'Franklin Templeton (FT)', period: '01 Jul 2026 to 30 Sep 2026', file: 'franklin-templeton.pdf' },
    { name: 'HDFC', period: '01 Jul 2026 to 30 Sep 2026', file: 'hdfc.pdf' },
    { name: 'HSBC', period: '01 Jul 2026 to 30 Sep 2026', file: 'hsbc.pdf' },
    { name: 'ICICI Prudential', period: '01 Aug 2026 to 30 Sep 2026', file: 'icici-prudential.pdf' },
    { name: 'Invesco', period: '01 Jul 2026 to 30 Sep 2026', file: 'invesco.pdf' },
    { name: 'Kotak', period: '01 Jul 2026 to 30 Sep 2026', file: 'kotak.pdf' },
    { name: 'Mahindra Manulife', period: '01 Apr 2026 onwards', file: 'mahindra-manulife.pdf' },
    { name: 'Mirae', period: '01 Jun 2026 to 30 Sep 2026', file: 'mirae.pdf' },
    { name: 'Motilal Oswal', period: 'September 2026', file: 'motilal-oswal.pdf' },
    { name: 'PPFAS', period: '', file: 'ppfas.pdf' },
    { name: 'Quant', period: '01 Sep 2026 to 30 Sep 2026', file: 'quant.pdf' },
    { name: 'SBI', period: '01 Jul 2026 to 30 Sep 2026', file: 'sbi.pdf' },
    { name: 'UTI', period: '01 Jul 2026 to 30 Sep 2026', file: 'uti.pdf' },
  ];
}

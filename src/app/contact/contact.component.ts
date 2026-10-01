import { AfterViewInit, Component } from '@angular/core';
import { MetaDataService } from '../services/meta-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  embedScriptUrl = 'https://app.youform.com/embed.js';

  constructor(metaData: MetaDataService) {

    metaData.setMetaData(
      'Contact Srujan Financial Services | Mumbai',
      'Get in touch with Srujan Financial Services in Kanjurmarg West, Mumbai. Send us a message, call +91 9892300128 or email deepali.sen@srujanfa.com.'
    )

  }

  ngAfterViewInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const youform = (window as any).YouformEmbed;
    if (youform) {
      // script is already on the page from an earlier visit, so only the embed needs rendering again
      youform.init();
      return;
    }
    const script = document.createElement('script');
    script.src = this.embedScriptUrl;
    document.body.appendChild(script);
  }
}

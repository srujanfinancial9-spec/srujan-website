import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {
  siteUrl = 'https://www.srujanfs.com';

  constructor(private meta: Meta,
    private title: Title,
    private router: Router,
    @Inject(DOCUMENT) private document: Document) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => this.setCanonical(event.urlAfterRedirects));
  }

  setMetaData(title: string, contentString: string, noindex = false) {
    this.setTitle(title);
    this.meta.updateTag({ name: 'description', content: contentString });
    this.meta.updateTag({ name: 'robots', content: noindex ? 'noindex, follow' : 'index, follow' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: contentString });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: contentString });
  }

  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  // one preferred URL per page: https, www, no query string, no fragment, no trailing slash
  setCanonical(url: string) {
    const path = url.split('#')[0].split('?')[0].replace(/\/+$/, '');
    const canonical = this.siteUrl + (path || '/');
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
    this.meta.updateTag({ property: 'og:url', content: canonical });
  }
}

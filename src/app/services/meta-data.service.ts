import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {

  constructor(private meta: Meta, private title: Title) {

  }
  setMetaData(title: string, contentString: string) {
    this.meta.addTags([
      { content: contentString },
    ]);
    this.setTitle(title)
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}


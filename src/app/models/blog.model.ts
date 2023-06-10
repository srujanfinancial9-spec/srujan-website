export class BlogObject {
  id: string;
  title: string;
  headerImg: string;
  content: string[];
  subTitle: string[];
  subTitleBody: string[];
  bottomTitle?: string;
  bottom?: string;
  author: string;
  date: string;
  profile?: string
  constructor(
    id: string,
    title: string,
    headerImg: string,
    content: string[],
    subTitle: string[],
    subTitleBody: string[],
    bottomTitle: string,
    bottom: string,
    author: string,
    date: string,
    profile: string,
  ) {
    this.id = id;
    this.title = title;
    this.headerImg = headerImg;
    this.content = content;
    this.subTitle = subTitle;
    this.subTitleBody = subTitleBody;
    this.bottomTitle = bottomTitle;
    this.bottom = bottom;
    this.author = author;
    this.date = date;
    this.profile = profile;
  }
}

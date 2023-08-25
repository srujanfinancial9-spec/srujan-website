export class PulicationData {
  id;
  serialNumber;
  date;
  section;
  title;
  link;
  constructor(id: string,
    serialNumber: number,
    date: string,
    section: string,
    title: string,
    link: string) {
    this.id = id;
    this.serialNumber = serialNumber;
    this.date = date;
    this.section = section;
    this.title = title;
    this.link = link;
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('testimonialsContainer') testimonialsContainer!: ElementRef;

  selectedItemIndex = 0;

  isPreviousActive = false;
  isNextActive = true;

  constructor(private elRef: ElementRef) { }

  clients: { title: string, body: string, about: string, icon: string, profile: string }[] = [
    { title: 'Deepali’s expertise and knowledge of the market are unparalleled', body: "When I transitioned from my corporate job to a new entrepreneurial journey in 2019, I knew I needed guidance on how to go about planning my personal finances.That's when I turned to Deepali. She gave me thorough guidance and plan on what all needs to be kept in mind and possible challenges considering the gestation period for any new venture. Even today, I continue to seek her advice and guidance as her expertise and knowledge of the market are unparalleled.", about: 'Biswarup Sen', icon: 'assets/Img/Png/biswarup.png', profile: 'Managing Partner, Zuperia Overseas' },
    { title: 'My financial goals are all set until I last.', body: "All thanks to Deepali Sen who listened to me patiently and designed an investment plan so that I would smile all the way.", about: 'Rajiv Verma', icon: 'assets/Img/Png/rajiv.png', profile: 'Managing Partner, Zuperia Overseas' },
    { title: 'Deepali’s knowledge and understanding of the financial market are exceptional.', body: "From the moment we began working together, Deepali’s professionalism and expertise have impressed me. She took the time to gather our inputs, goals, and needs, and provided us with customized and tailored investment plans that aligned perfectly with our requirements.", about: 'Bhavin Banjara', icon: 'assets/Img/Png/bhavin.png', profile: 'Managing Partner, Zuperia Overseas' },
    { title: 'Deepali has been integral to our financial journey.', body: "At each step, she has taken painstaking efforts to understand my family's needs, goals, risk appetite, and structured our portfolio around that. Over the last decade, I have come to trust her implicitly as someone who watches out for us as if she were a family member. This has been especially important for us, considering the erratic nature of our income as entrepreneurs. Be it pushing us to save in line with our goals or restructuring portfolios at various milestones, Deepali has always been aligned with our needs and interests.", about: 'Janani Ravichandran & Achal Dhruva', icon: '', profile: 'Managing Partner, Zuperia Overseas' },
  ];
  ngOnInit(): void {
  }

  scrollPrevious() {
    const container = this.testimonialsContainer.nativeElement;
    console.log("scrollPrevious:-", container.scrollLeft)
    container.scrollLeft -= container.offsetWidth;


    this.updateButtonStates();
  }
  scrollNext() {
    const container = this.testimonialsContainer.nativeElement;
    console.log("scrollNext :-",container.scrollLeft)
    container.scrollLeft += container.offsetWidth;

    this.updateButtonStates();
  }

  updateButtonStates() {
    const container = this.testimonialsContainer.nativeElement;
    this.isPreviousActive = container.scrollLeft > 0;
    this.isNextActive = container.scrollLeft + container.offsetWidth < container.scrollWidth;
  }


}

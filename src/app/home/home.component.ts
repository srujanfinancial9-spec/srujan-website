import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MetaDataService } from '../services/meta-data.service';

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

  constructor(private elRef: ElementRef, private metaData: MetaDataService) {
    metaData.setMetaData('Srujan Financial - Personal Finance Guidance for Busy Young Professionals', 'We offer simple and personalized financial guidance tailored to busy young professionals. Achieve your financial goals, build long-term wealth, and secure your financial future with our expert advice and services.')
  }
  clients: { title: string, body: string, body2: string, about: string, avatar: string, profile: string }[] = [
    { title: 'Deepali’s expertise and knowledge of the market are unparalleled', body: "When I transitioned from my corporate job to a new entrepreneurial journey in 2019, I knew I needed guidance on how to go about planning my personal finances.", body2: "That's when I turned to Deepali. She gave me thorough guidance and plan on what all needs to be kept in mind and possible challenges considering the gestation period for any new venture. Even today, I continue to seek her advice and guidance as her expertise and knowledge of the market are unparalleled.", about: 'Biswarup Sen', avatar: 'assets/Img/Png/biswarup.png', profile: 'Managing Partner, Zuperia Overseas' },
    { title: 'Deepali’s knowledge and understanding of the financial market are exceptional.', body: "From the moment we began working together, Deepali’s professionalism and expertise have impressed me.", body2: "She took the time to gather our inputs, goals, and needs, and provided us with customized and tailored investment plans that aligned perfectly with our requirements.", about: 'Bhavin Banjara', avatar: 'assets/Img/Png/bhavin.png', profile: 'Senior Manager, Big4 Company' },
    { title: 'Deepali has been integral to our financial journey.', body: "Over the last decade, I have come to trust her implicitly as someone who watches out for us as if she were a family member.", about: 'Janani Ravichandran & Achal Dhruva', body2: "This has been especially important for us, considering the erratic nature of our income as entrepreneurs. Be it pushing us to save in line with our goals or restructuring portfolios at various milestones, Deepali has always been aligned with our needs and interests.", avatar: 'assets/Img/Png/JananiRavichandranAchalDhruva.png', profile: 'Media Personnel' },
    { title: 'Deepali’s dedication for helping people understand financial planning for themselves is exceptional.', body: "I have known Deepali for almost a decade now. Her dedication and passion to help people understand financial planning for themselves and then help them by customizing her advice basis their requirement is exceptional.", about: 'Vikram Ganga', body2: "She goes that extra length to make you feel confident that it is a joint decision to move forward and she also timely advises to take necessary course corrections, basis change in goals or market performance if any.", avatar: 'assets/Img/Png/vikram_ganga.png', profile: '' },
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
    console.log("scrollNext :-", container.scrollLeft)
    container.scrollLeft += container.offsetWidth;

    this.updateButtonStates();
  }

  updateButtonStates() {
    const container = this.testimonialsContainer.nativeElement;
    this.isPreviousActive = container.scrollLeft > 0;
    this.isNextActive = container.scrollLeft + container.offsetWidth < container.scrollWidth;
  }


}

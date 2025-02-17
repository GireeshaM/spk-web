import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fadeInAnimation } from '../web-modules/animations/animations';
import { Router } from '@angular/router';
import { auto } from '@popperjs/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation],
})
export class HomeComponent implements AfterViewInit, OnInit {
  isVisible = false;
  showPopup = true;

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}
  @ViewChild('heroVideo', { static: true })
  heroVideo!: ElementRef<HTMLVideoElement>;

  @ViewChild('animatedContainer', { static: false })
  animatedContainer!: ElementRef;

  videoSource: string = 'assets/home/homeHero.mp4';

  ngAfterViewInit() {
    this.ensureVideoPlays();
  }

  public whatMainHeader = 'Simplifying IT Solutions';
  public responsiveOptions!: any[];

  public feedbacks = [
    {
      image: 'assets/home/blog-img2.png',
      title: "Salesforce's Commitment to Data Security and Privacy Excellence",
      description:
        'Salesforce offers an exceptional degree of security as a cloud-based platform to secure data about clients against cyber assaults and unlawful access. The security of data is a critical responsibility for all businesses.',
      category: 'salesforce',
    },
    {
      image: 'assets/home/blog-img1.png',
      title: 'Salesforce Health Cloud transform Payer sector in Healthcare',
      description:
        'The healthcare sector is shifting away from charging for services and toward value-based treatment. Because of escalating healthcare costs, excess healthcare spending associated with needless and inefficient treatments, care based on value has become vital.',
      category: 'salesforce',
    },
    {
      image: 'assets/home/blog-img3.jpg',
      title: 'Salesforce Marketing Cloud Empowers Marketing of Businesses',
      description:
        'The automation platform Salesforce Marketing Cloud is highly praised and undoubtedly the most feature-rich offering in its class. It helps companies provide connected, tailored, and one-on-one customer experiences by providing amazing insights into consumer journeys.',
      category: 'salesforce',
    },
    {
      image: 'assets/home/blog-img2.png',
      title:
        'Exposing the Tempting Benefits of Choosing Salesforce Customization',
      description:
        "The process of improving Salesforce's capabilities by including additional functionality and features to satisfy business needs is known as Salesforce customization. Additionally, there is a scalable benefit when sales and productivity apps are integrated and resonate with a brand. ",
      category: 'salesforce',
    },
  ];

  public images!: any[];
  ensureVideoPlays(): void {
    const video = this.heroVideo.nativeElement;

    // Play video once the page is loaded
    window.addEventListener('load', () => {
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.loop = true;
      video.preload = auto;
      video.play().catch((error) => {
        console.error('Autoplay error:', error);
      });
    });
  }

  private setMetaData(): void {
    this.titleService.setTitle(
      'SprintPark | IT Consulting, Staffing, Project Management & Software Solutions'
    );
    this.metaService.updateTag({
      name: 'description',
      content:
        'SprintPark excels in providing quality services like IT Consulting, Staffing, Project Management, and Software Solutions. Our team of professionals is committed to offering flexible and tailored solutions to enhance your business.',
    });
  }
  public ngOnInit(): void {
    this.setMetaData();
    this.setVideoSource();

    this.ensureVideoPlays();

    this.images = [
      { image: 'assets/home/copado.png' },
      { image: 'assets/home/cloudbees.png' },
      { image: 'assets/home/aws.png' },
      { image: 'assets/home/google.png' },
      { image: 'assets/home/microsoft.png' },
      { image: 'assets/home/salesforce.png' },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  public weOfferCards = [
    {
      cardHeading: 'Request a Team',
      cardContent:
        'Reach out to us via email or phone, and we’ll promptly assign a team of industry experts to your project. Our professionals are carefully selected to match your specific needs, ensuring you get the best expertise from the start.',
      icon: 'assets/home/teamIcon.png',
      isZoomed: false,
      isCardVisible: true,
    },
    {
      cardHeading: 'Talk with our Professionals',
      cardContent:
        'Engage in an in-depth consultation with our seasoned professionals. During this discussion,we will dive into the intricacies of your business needs,challenges,and goals to comprehensively understand your project.',
      icon: 'assets/home/talkIcon.png',
      isZoomed: false,
      isCardVisible: true,
    },
    {
      cardHeading: 'Understand Expectations',
      cardContent:
        'We will discuss your projects requirements in detail, as well any restrictions. This ensures we are working to your strategy. The scope of work fulfils what you want as a business outcome for the project.',
      icon: 'assets/home/expectIcon.png',
      isZoomed: false,
      isCardVisible: true,
    },
    {
      cardHeading: 'Receive Custom Plan',
      cardContent:
        'We will plan as per your need and make some customized strategy which is both flexible and adjustable to your requirements. We will create custom plan for your project to address unique challenges.',
      icon: 'assets/home/planIcon.png',
      isZoomed: false,
      isCardVisible: true,
    },
    {
      cardHeading: 'Implement Solution',
      cardContent:
        'We provide continuous support with our dedicated  team to your project. In addition to it our 24/7 customer support will get to taken care of everything  for hassle-free experience.',
      icon: 'assets/home/solutionIcon.png',
      isZoomed: false,
      isCardVisible: true,
    },
  ];
  public services = [
    {
      img: 'assets/home/itConsult.jpg',
      title: 'IT Consulting',
      description:
        'Our IT consulting services offer firms strategic direction and specialized knowledge that will help to overcome challenging barriers and accomplish goals.',
      imgSrc: 'assets/home/itConsultIcon.png',
      link: '/it-consulting',
    },
    {
      img: 'assets/home/staffing.jpg',
      title: 'Staffing Solutions',
      description:
        'The right talent must be acquired if an organization intends to grow. You may access a pool of applicants who can contribute to your efforts.',
      imgSrc: 'assets/home/staffingIcon.png',
      link: '/staffingSolutions',
    },
    {
      img: 'assets/home/projectM.jpg',
      title: 'Project Management',
      description:
        'Our project management services guarantee that your efforts are carried out to the highest standards of quality, on schedule, and within budget.',
      imgSrc: 'assets/home/projectManagementIcon.png',
      link: '/projectManagement',
    },
    {
      img: 'assets/home/softwareCard.jpg',
      title: 'Software Development',
      description:
        'Tailored software development services are accessible from SprintPark, targeted to your specific business needs.',
      imgSrc: 'assets/home/softwareServiceIcon.png',
      link: '/softwareServices',
    },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowHeight = window.innerHeight;
    const container = document.querySelector('#animatedContainer');

    if (container) {
      // const containerTop = container.getBoundingClientRect().top + scrollTop;

      let closestCardIndex = -1;
      let minDistance = Number.MAX_VALUE;

      // Find the card closest to the center of the viewport
      this.weOfferCards.forEach((card, index) => {
        const cardElement = container.querySelectorAll('.card')[index];
        const cardRect = cardElement.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        const viewportCenter = windowHeight / 2;

        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestCardIndex = index;
        }
      });

      // Update card states
      this.weOfferCards.forEach((card, index) => {
        if (index === closestCardIndex) {
          card.isZoomed = true;
        } else {
          card.isZoomed = false;
        }
      });
    }
  }

  closePopup() {
    this.showPopup = false;
  }
  navigateToContact() {
    this.closePopup();
    this.router.navigate(['/contactUs']);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setVideoSource();
  }

  setVideoSource() {
    // Change for screens 576px or smaller
    if (window.innerWidth <= 576) {
      this.videoSource = 'assets/home/homeVideoMedia.mp4';
    } else {
      this.videoSource = 'assets/home/homeHero.mp4';
    }
  }
}

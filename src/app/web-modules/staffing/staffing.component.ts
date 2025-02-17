import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.scss'],
})
export class StaffingComponent {
  //Main Hero
  public whatMainHeader = 'Staffing Solutions';
  public heroMainImage = 'assets/staffing/staffingHero.jpg';
  public smallImage = 'assets/staffing/staffingMedia.jpg';

  //Why staffing
  public whyheader = 'Why Staffing Solutions?';
  public whyList = [
    'Increase Employee Retention',
    'Increase employee retention with streamlined recruitment process. ',
    'Skip Specific Training',
    'Recruit talent according to your needs and avoid training costs.',
    'Access Vast pool of Talent ',
    'Find you best fit from our vast pool of talent from across various countries.',
    'Time Efficient',
    'Hectic recruitment and training can be avoided by outsourcing them to our professionals.',
  ];
  public images = [
    'assets/staffing/retention.png',
    'assets/staffing/training.png',
    'assets/staffing/talent.png',
    'assets/staffing/time.png',
  ];
  constructor(private titleService: Title, private meta: Meta) {}

  private setMetaData(): void {
    this.titleService.setTitle(
      'SprintPark | Your Go-To for Expert Staffing Solutions '
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'SprintPark provides tailored options including contract, permanent, offshore staffing and nearshore staffing to help you find the right talent quickly and cost-effectively.',
    });
  }

  public ngOnInit(): void {
    this.setMetaData();
  }

  //What we do
  public whatHeader =
    'SprintPark offers wide range of Staffing services which include';

  public whatList = [
    {
      image: 'assets/staffing/nearShoreStaffing.png',
      title: 'Nearshore Staffing',
      link: '/contactUs',
      description:
        'SprintPark helps you leverage services from professionals in nearby countries and helps to offer manpower where its lacking which in turn helps you achieve your business goals easily. We help you  to managing teams effectively and streamlining your workflow and gain access to the top global talent.',
      btn: 'Contact Us',
    },
    {
      image: 'assets/staffing/contractStaffing.png',
      title: 'Contract Staffing',
      link: '/contactUs',
      description:
        'SprintPark offers access to vast pool of talent to help you hire employees on contract. You can skip the tiring and long hiring process and leave it to SprintPark. Short-term employees bring talent you need and will save your time and money.',
      btn: 'Contact Us',
    },
    {
      image: 'assets/staffing/permanentStaffing.png',
      title: 'Permanent Staffing',
      link: '/contactUs',
      description:
        'SprintPark also offers permanent hiring services. We follow a planned and strategic approach to ensure high-quality recruitment solutions. Candidates are selected based on their communication skills, technical skills, qualities and many more.',
      btn: 'Contact Us',
    },
    {
      image: 'assets/staffing/offShoreStaffing.png',
      title: 'Offshore Staffing',
      link: '/contactUs',
      description:
        'SprintPark helps in sourcing and finding your offshore team. We’ll help you work out your hiring needs and preparing your job profiles.We’ll help you identify key performance indicators, performance targets and reporting structures for your offshore staff.',
      btn: 'Contact Us',
    },
  ];

  //How we work
  public img = 'assets/staffImg.png';
  public icon = 'assets/softwareServices/workFlowIcon.png';
}

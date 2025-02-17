import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  public img = 'assets/industries/industry6.png';
  public industryImg = 'assets/industries/educationImg.jpg';
  public itHeader = 'Education';
  public itContent =
    'Higher education organisations are charged with developing the talent for the next generation. Institutions are evaluating and implementing new programmes and new models of instruction that are essential to address an increasingly diverse population of students. The ability to leverage technologies, including e-learning and in the classroom, is essential to success in innovating student experience and improving educational outcomes.At the same time, operational efficiency and effective governance in education have never been more important. Declining revenues caused by increasing discount rates and the need to effectively manage operating costs have put significant stress on many institutions.The educational institutions of the future must be well run and controlled, while effectively harnessing innovation to reimagine the educational experience.';
  cards = [
    {
      title: 'IT Consulting',
      description:
        'We help educational institutions with technology integration, digital learning strategies, and IT infrastructure improvements.',
      link: '/it-consulting',
    },
    {
      title: 'Network Engineering',
      description:
        'We design and maintain the network infrastructure necessary for e-learning, campus connectivity, and administrative operations.',
      link: '/networkEngineering',
    },
    {
      title: 'Data Analytics',
      description:
        'We analyze student performance data, track learning outcomes, and improve educational strategies using data-driven insights.',
      link: '/dataAnalytics',
    },
    {
      title: 'Project Management',
      description:
        'We oversee projects such as the deployment of new learning management systems (LMS), campus-wide IT upgrades, and the integration of educational technologies.',
      link: '/projectManagement',
    },
    {
      title: 'Staffing Solutions',
      description:
        'We provide IT staff for educational technology roles, such as systems administrators, IT support specialists, and e-learning developers.',
      link: '/staffingSolutions',
    },
  ];
  constructor(private meta: Meta, private title: Title) {}
  private setMetaData(): void {
    this.title.setTitle('SprintPark | Elevate Education with Our Solutions '),
      this.meta.updateTag({
        name: 'description',
        content:
          'SprintPark offers specialized solutions for higher education, including IT consulting, network engineering, and data analytics. We are committed to enhance learning and operational success.',
      });
  }
  public ngOnInit(): void {
    this.setMetaData();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss'],
})
export class CompanyProfileComponent {
  recognitionsData = [
    {
      name: 'Gireesha',
      designation: 'Developer',
      image: 'assets/dashboard/image.png',
    },
    {
      name: 'Sriya',
      designation: 'HR Senior',
      image: 'assets/dashboard/image.png',
    },
    {
      name: 'Mounika',
      designation: 'Developer',
      image: 'assets/dashboard/image.png',
    },
    {
      name: 'Sandhya',
      designation: 'HR',
      image: 'assets/dashboard/image.png',
    },
    {
      name: 'Lekhana',
      designation: 'Designer',
      image: 'assets/dashboard/image.png',
    },
    {
      name: 'Nissi',
      designation: 'Marketing',
      image: 'assets/dashboard/image.png',
    },
  ];
}

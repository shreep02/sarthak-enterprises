import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  values = [
    {
      title: 'Quality',
      description:
        'We never compromise on the quality of materials or workmanship.',
    },
    {
      title: 'Integrity',
      description:
        'Transparency and honesty are at the core of all our business dealings.',
    },
    {
      title: 'Innovation',
      description:
        'We adopt the latest technologies and design trends to deliver modern solutions.',
    },
    {
      title: 'Safety',
      description:
        'Safety is our priority, ensuring a secure environment for our team and clients.',
    },
  ];

  leaders = [
    {
      name: 'Mr. Prakash',
      role: 'Chief Executive Officer',
      image: 'assets/private/ceo.jpg',
      bio: [
        'Mr. Prakash has led Sarthak Enterprises through dynamic growth, pioneering initiatives in Solar Energy, Infrastructure, and Skilled Manpower services. With a strong background in construction and engineering, he ensures the delivery of state-of-the-art facilities and top-notch workforce solutions.',
        'Driven by innovation and a commitment to sustainability, he continues to steer the company towards excellence, empowering communities and businesses through quality service and modern solutions.',
      ],
    },
  ];
}

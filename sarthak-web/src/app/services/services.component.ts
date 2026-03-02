import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = [
    {
      title: 'Infrastructure & Construction Projects',
      description:
        'Delivering high-quality infrastructure development and construction solutions, ensuring durability and excellence in every project.',
      image: 'assets/infrastructure.jpg',
    },
    {
      title: 'Skilled Manpower Services',
      description:
        'Providing highly skilled and reliable workforce solutions tailored to meet the specific demands of various industries.',
      image: 'assets/manpower.jpg',
    },
    {
      title: 'Solar Panel Installations',
      description:
        'Implementing sustainable energy solutions with professional solar panel installation services for residential and commercial properties.',
      image: 'assets/solar.jpg',
    },
  ];
}

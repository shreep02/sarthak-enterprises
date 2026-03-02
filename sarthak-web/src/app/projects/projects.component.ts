import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Solar Panel Installation in Rajasthan',
      category: 'Solar Energy System Installation',
      description:
        'In this landmark project, we successfully installed a high-efficiency solar power system for Adani Group in Rajasthan. The project aimed to reduce the energy costs for the industrial facility while ensuring a sustainable energy future. The solar panels, with a combined capacity of 5 MW, now provide 70% of the plant’s energy needs, significantly reducing its carbon footprint.',
      image: 'assets/solar-raj.jpg',
    },
  ];
}

import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true, // ✅ Ensures it's a standalone component
  imports: [CommonModule, NgClass], // ✅ Add CommonModule here
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services = [
    {
      title: 'Solar Panel Installations',
      description:
        'We specialize in the installation of high-efficiency solar panels for residential, commercial, and industrial clients, ensuring maximum energy savings.',
      image: 'solar.jpg',
    },
    {
      title: 'Infrastructure  & Construction Projects',
      description:
        'Our expertise in large-scale infrastructure projects helps build sustainable and modern structures, including roads, bridges, and commercial buildings.',
      image: 'infrastructure.jpg',
    },
    {
      title: 'Skilled Manpower Services',
      description:
        'We provide highly skilled manpower for various industries, including construction, electrical work, and mechanical services, ensuring quality and reliability.',
      image: 'manpower.jpg',
    },
  ];
}

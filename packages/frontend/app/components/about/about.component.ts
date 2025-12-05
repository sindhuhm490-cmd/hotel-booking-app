import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  features = [
    {
      title: 'Easy Hotel Search',
      description: 'Search hotels by name, city, or location with our advanced search functionality.',
      icon: '🔍'
    },
    {
      title: 'Secure Booking',
      description: 'Book hotels securely with our encrypted payment system and instant confirmation.',
      icon: '🔒'
    },
    {
      title: 'Admin Management',
      description: 'Comprehensive admin dashboard for managing hotels, users, and bookings.',
      icon: '⚙️'
    },
    {
      title: '24/7 Availability',
      description: 'Book hotels anytime, anywhere with our responsive web application.',
      icon: '🌍'
    }
  ];

  technologies = [
    { name: 'Angular 21', description: 'Modern frontend framework' },
    { name: 'Node.js 22', description: 'Backend runtime environment' },
    { name: 'Express.js', description: 'Web application framework' },
    { name: 'MongoDB', description: 'NoSQL database' },
    { name: 'TypeScript', description: 'Type-safe JavaScript' },
    { name: 'TailwindCSS', description: 'Utility-first CSS framework' }
  ];
}
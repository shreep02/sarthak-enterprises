import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  standalone: true,
})
export class NavigationComponent {
  isMenuOpen = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.document.body.classList.add('noscroll');
    } else {
      this.document.body.classList.remove('noscroll');
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.document.body.classList.remove('noscroll');
  }
}

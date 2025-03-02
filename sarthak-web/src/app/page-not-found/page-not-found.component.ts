import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  template: `<h2>Page Not Found! Redirecting to Home...</h2>`,
  imports: [],
  styles: [
    `
      h2 {
        text-align: center;
        margin-top: 50px;
        color: red;
      }
    `,
  ],
})
export class PageNotFoundComponent {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000); // Redirect after 3 seconds
  }
}

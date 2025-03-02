import { Component, inject } from '@angular/core';
import { CompanyInfo, ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private contactInfoService: ContactInfoService = inject(ContactInfoService);
  contactInfo?: CompanyInfo;

  constructor() {
    this.contactInfoService.getCompanyInfo().subscribe((data) => {
      this.contactInfo = data;
    });
  }
}

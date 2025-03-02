import { Component, inject } from '@angular/core';
import { CompanyInfo, ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-organization',
  imports: [],
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.scss',
})
export class OrganizationComponent {
  private contactInfoService: ContactInfoService = inject(ContactInfoService);
  contactInfo?: CompanyInfo;

  constructor() {
    this.contactInfoService.getCompanyInfo().subscribe((data) => {
      this.contactInfo = data;
    });
  }
}

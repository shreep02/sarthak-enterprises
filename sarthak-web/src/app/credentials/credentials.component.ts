import { Component, inject } from '@angular/core';
import { CompanyInfo, ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-credentials',
  imports: [],
  templateUrl: './credentials.component.html',
  styleUrl: './credentials.component.scss',
})
export class CredentialsComponent {
  private contactInfoService: ContactInfoService = inject(ContactInfoService);
  contactInfo?: CompanyInfo;

  constructor() {
    this.contactInfoService.getCompanyInfo().subscribe((data) => {
      this.contactInfo = data;
    });
  }
}

import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CompanyInfo, ContactInfoService } from '../contact-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  private contactInfoService: ContactInfoService = inject(ContactInfoService);
  contactInfo?: CompanyInfo;

  constructor() {
    this.contactInfoService.getCompanyInfo().subscribe((data) => {
      this.contactInfo = data;
    });
  }
}

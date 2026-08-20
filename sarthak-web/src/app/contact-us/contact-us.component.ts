import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyInfo, ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  private contactInfoService: ContactInfoService = inject(ContactInfoService);
  contactInfo?: CompanyInfo;

  formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  constructor() {
    this.contactInfoService.getCompanyInfo().subscribe((data) => {
      this.contactInfo = data;
    });
  }

  sendMessage() {
    const { name, email, phone, message } = this.formData;
    const toEmail = this.contactInfo?.EMAIL || 'entp.sarthak@gmail.com';
    const subject = `New Inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }
}

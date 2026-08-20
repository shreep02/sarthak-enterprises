import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ContactInfoService } from './contact-info.service';

describe('ContactInfoService', () => {
  let service: ContactInfoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ContactInfoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request the company info JSON', () => {
    const mockResponse = {
      COMPANY_NAME: 'Sarthak Enterprises',
      EMAIL: 'test@example.com',
      CONTACT_NO: '9876543210',
      ADDRESS: 'Test Address',
      GSTIN: 'GST123',
      CIN: 'CIN123',
      CEO_NAME: 'Test CEO',
      MAP: 'https://maps.example.com',
    };

    let actualResponse: typeof mockResponse | undefined;

    service.getCompanyInfo().subscribe((response) => {
      actualResponse = response;
    });

    const req = httpMock.expectOne('assets/private/contact_info.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

    expect(actualResponse).toEqual(mockResponse);
  });
});

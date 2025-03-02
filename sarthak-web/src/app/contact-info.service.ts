import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

export interface CompanyInfo {
  GSTIN: string;
  COMPANY_NAME: string;
  CIN: string;
  CEO_NAME: string;
  ADDRESS: string;
  CONTACT_NO: string;
  EMAIL: string;
  MAP: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactInfoService {
  private primaryJsonUrl = 'private/contact_info.json';
  private fallbackJsonUrl = 'contact_info-example.json';

  constructor(private http: HttpClient) {}

  getCompanyInfo(): Observable<CompanyInfo> {
    return this.http.get<CompanyInfo>(this.primaryJsonUrl).pipe(
      catchError((error) => {
        console.warn(
          `Primary JSON not found, switching to fallback: ${error.message}`
        );
        return this.http.get<CompanyInfo>(this.fallbackJsonUrl);
      })
    );
  }
}

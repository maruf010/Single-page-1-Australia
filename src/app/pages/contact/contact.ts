import { Component } from '@angular/core';
import { InquiryFormComponent } from '../../components/inquiry-form/inquiry-form';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InquiryFormComponent],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {}

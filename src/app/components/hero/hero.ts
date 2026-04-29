import { Component } from '@angular/core';
import { InquiryFormComponent } from '../inquiry-form/inquiry-form';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [InquiryFormComponent],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {
}

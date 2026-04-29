import { Component } from '@angular/core';

@Component({
  selector: 'app-inquiry-form',
  standalone: true,
  templateUrl: './inquiry-form.html',
  styleUrls: ['./inquiry-form.css']
})
export class InquiryFormComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    // In a real app, logic goes here
    alert('Thank you! We will contact you soon.');
  }
}

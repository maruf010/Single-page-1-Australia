import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { ServicesComponent } from '../../components/services/services';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us';
import { LoanProcessComponent } from '../../components/loan-process/loan-process';
import { LoanCalculatorComponent } from '../../components/loan-calculator/loan-calculator';
import { TestimonialsComponent } from '../../components/testimonials/testimonials';
import { FaqComponent } from '../../components/faq/faq';
import { CtaComponent } from '../../components/cta/cta';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    WhyChooseUsComponent,
    LoanProcessComponent,
    LoanCalculatorComponent,
    TestimonialsComponent,
    FaqComponent,
    CtaComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}

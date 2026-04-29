import { Component } from '@angular/core';
import { LoanCalculatorComponent } from '../../components/loan-calculator/loan-calculator';

@Component({
  selector: 'app-calculator-page',
  standalone: true,
  imports: [LoanCalculatorComponent],
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css']
})
export class CalculatorPageComponent {}

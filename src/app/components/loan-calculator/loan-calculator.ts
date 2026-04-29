import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './loan-calculator.html',
  styleUrls: ['./loan-calculator.css']
})
export class LoanCalculatorComponent implements OnInit {
  amount: number = 500000;
  rate: number = 5.5;
  years: number = 30;
  frequency: string = 'monthly';
  
  result: number | null = null;
  totalInterest: number | null = null;
  totalRepayment: number | null = null;

  ngOnInit() {
    this.calculate();
  }

  calculate() {
    const principal = this.amount;
    const calculateInterest = this.rate / 100;
    let paymentsPerYear = 12;
    
    if (this.frequency === 'fortnightly') paymentsPerYear = 26;
    if (this.frequency === 'weekly') paymentsPerYear = 52;

    const ratePerPeriod = calculateInterest / paymentsPerYear;
    const numberOfPayments = this.years * paymentsPerYear;

    if (ratePerPeriod === 0) {
      this.result = principal / numberOfPayments;
    } else {
      this.result = principal * (ratePerPeriod * Math.pow(1 + ratePerPeriod, numberOfPayments)) / (Math.pow(1 + ratePerPeriod, numberOfPayments) - 1);
    }
    
    this.totalRepayment = this.result * numberOfPayments;
    this.totalInterest = this.totalRepayment - principal;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.html',
  styleUrls: ['./faq.css']
})
export class FaqComponent {
  activeIndex: number | null = 0;

  faqs = [
    {
      question: 'How much deposit do I need to buy a house?',
      answer: 'Generally, you need at least a 5% to 20% deposit. A 20% deposit helps you avoid paying Lenders Mortgage Insurance (LMI), but there are many options available for smaller deposits, including government guarantee schemes.'
    },
    {
      question: 'What is Lenders Mortgage Insurance (LMI)?',
      answer: 'LMI is an insurance policy that protects the lender, not you, in case you default on your loan. It is usually required if your deposit is less than 20% of the property value.'
    },
    {
      question: 'How long does it take to get loan approval?',
      answer: 'Pre-approval can often be obtained within a few days, depending on the lender and how complex your situation is. Formal approval usually takes 1-2 weeks once you have found a property and submitted the contract.'
    },
    {
      question: 'Should I choose a fixed or variable interest rate?',
      answer: 'It depends on your goals. Fixed rates offer certainty with repayments, while variable rates often provide more flexibility (like making extra repayments or using an offset account). We can help you decide which is best for you.'
    },
    {
      question: 'What fees are involved in buying a property?',
      answer: 'Beyond your deposit, you should budget for stamp duty, legal/conveyancing fees, building and pest inspections, loan application fees, and moving costs. This is often called "funds to complete."'
    },
    {
      question: 'Why should I use a mortgage broker instead of going to a bank?',
      answer: 'A bank can only offer you their own products. As brokers, we compare hundreds of loans from over 40 different lenders to find the one that best suits your specific needs, potentially saving you thousands.'
    }
  ];

  toggleFaq(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = null;
    } else {
      this.activeIndex = index;
    }
  }
}

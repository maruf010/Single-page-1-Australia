import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { HomeLoanComponent } from './pages/home-loan/home-loan';
import { RefinanceComponent } from './pages/refinance/refinance';
import { FirstHomeBuyerComponent } from './pages/first-home-buyer/first-home-buyer';
import { InvestmentLoanComponent } from './pages/investment-loan/investment-loan';
import { ConstructionLoanComponent } from './pages/construction-loan/construction-loan';
import { DebtConsolidationComponent } from './pages/debt-consolidation/debt-consolidation';
import { CalculatorPageComponent } from './pages/calculator/calculator';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home-loan', component: HomeLoanComponent },
  { path: 'refinance', component: RefinanceComponent },
  { path: 'first-home-buyer', component: FirstHomeBuyerComponent },
  { path: 'investment-loan', component: InvestmentLoanComponent },
  { path: 'construction-loan', component: ConstructionLoanComponent },
  { path: 'debt-consolidation', component: DebtConsolidationComponent },
  { path: 'calculator', component: CalculatorPageComponent },
  { path: '**', redirectTo: '' }
];

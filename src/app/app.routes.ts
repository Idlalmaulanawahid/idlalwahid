import { Routes } from '@angular/router';
import { PortfolioLandingComponent } from './pages/portfolio-landing/portfolio-landing.component';

export const routes: Routes = [
    {path: '', component: PortfolioLandingComponent},
    {path: 'portfolio-landing', component: PortfolioLandingComponent},
    // Here add new pages component

    {path: '**', component: PortfolioLandingComponent} // This line will remain down from the whole pages component list
];
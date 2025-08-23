import { Component } from '@angular/core';
import { PortfolioBannerComponent } from './portfolio-banner/portfolio-banner.component';
import { PortfolioAboutComponent } from './portfolio-about/portfolio-about.component';
import { PortfolioServicesComponent } from './portfolio-services/portfolio-services.component';
import { PortfolioShowcaseComponent } from './portfolio-showcase/portfolio-showcase.component';
import { PortfolioSoftwareComponent } from './portfolio-software/portfolio-software.component';

@Component({
    selector: 'app-portfolio-landing',
    imports: [PortfolioBannerComponent, PortfolioAboutComponent, PortfolioServicesComponent, PortfolioShowcaseComponent, PortfolioSoftwareComponent],
    templateUrl: './portfolio-landing.component.html',
    styleUrls: ['./portfolio-landing.component.scss']
})
export class PortfolioLandingComponent {}
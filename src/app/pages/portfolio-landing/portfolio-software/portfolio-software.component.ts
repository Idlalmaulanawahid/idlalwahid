import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-portfolio-software',
    imports: [NgClass, NgIf, RouterLink],
    templateUrl: './portfolio-software.component.html',
    styleUrls: ['./portfolio-software.component.scss']
})
export class PortfolioSoftwareComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}
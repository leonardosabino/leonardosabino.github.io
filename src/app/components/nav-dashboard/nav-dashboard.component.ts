import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-nav-dashboard',
    templateUrl: './nav-dashboard.component.html',
    styleUrls: ['./nav-dashboard.component.scss']
})
export class NavDashboardComponent {

    showSubmenu = false;
    @Output() addItem = new EventEmitter<any>();
}
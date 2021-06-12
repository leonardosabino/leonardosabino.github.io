import { Component } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import { Post } from 'src/app/model/post';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  get options(): GridsterConfig {
    return this.layoutService.options;
  }
  get posts(): Post[] {
    return this.layoutService.posts;
  }

  constructor(
    private layoutService: LayoutService,
  ) { }

  addItem() {
    this.layoutService.addItem();
  }

  deleteItem(grid: String) {
    this.layoutService.deleteItem(grid);
  }

  resetItens() {
    this.layoutService.resetItens();
  }

  clear() {
    this.layoutService.clear();
  }

}

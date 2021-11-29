import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  
  activeFilter = '';

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.activeFilter$.subscribe(activeFilter => this.activeFilter = activeFilter);
  }

  toggleFilter(filter: string) {
    this.stateService.updateActiveFilter(this.activeFilter == filter ? '' : filter);
  }

  filterIsActive(filter: string): boolean {
    return this.activeFilter === filter;
  }

}

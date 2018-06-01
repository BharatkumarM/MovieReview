import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';

@Component({
    selector: 'app-search',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit
{
    public searchList:any;

    constructor(private dashboardService: DashboardService)
    {

    }

    public ngOnInit(): void
    {
        this.searchList = ['All', 'Movies', 'TV Shows'];
    }

    public selectValue(value:any)
    {
        this.dashboardService.onSelectType(value);
    }
}
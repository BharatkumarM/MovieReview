import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit
{
    public searchList:any;
    public ngOnInit(): void
    {
        this.searchList = ['Movies', 'TV Shows'];
    }
}
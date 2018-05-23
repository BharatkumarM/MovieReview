import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.less']
})

export class DashboardComponent implements OnInit
{
    public title: string = '';

    public ngOnInit(): void
    {
        this.title = 'Review by AB';
    }
}
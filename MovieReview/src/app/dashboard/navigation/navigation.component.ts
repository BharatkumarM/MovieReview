import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.less']
})

export class NavigationComponent implements OnInit
{
    public title: string = '';
    public ngOnInit(): void
    {
        this.title = 'Review by AB';
    }
}
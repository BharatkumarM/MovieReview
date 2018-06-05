import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';
declare let $:any;
@Component({
    selector: 'app-search',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit
{   
    public topType : any = "Movies and TV Shows";
    public searchList : any;
    public searchResult: any;
    public objectkeys : any;
    constructor(private dashboardService: DashboardService)
    {

    }

    public ngOnInit(): void
    {
        this.searchList = ['All', 'Movies', 'TV Shows'];
        $('#example').focus(function() {
          $('div.example').show();
            $(document).bind('focusin.example click.example',function(e) {
                if ($(e.target).closest('.example, #example').length) return;
                $(document).unbind('.example');
                $('div.example').fadeOut(10);
            });  
        });
        $('div.example').hide();
        this.searchResult = [
            {
                "title":"Baahubali",
                "movie_id":"1234",
                "year":"2015",
                "Genre":"Action"
            },
            {
                "title":"Baahubali2",
                "movie_id":"1235",
                "year":"2018",
                "Genre":"Action"
            },
            {
                "title":"Deadpool2",
                "movie_id":"1236",
                "year":"2017",
                "Genre":"Comedy"
            },
            {
                "title":"Dark Night",
                "movie_id":"1237",
                "year":"2013",
                "Genre":"Adventure"
            },
            {
                "title":"Captain Marvel",
                "movie_id":"1238",
                "year":"2019",
                "Genre":"Romance"
            },
            {
                "title":"Avengers",
                "movie_id":"1239",
                "year":"2014",
                "Genre":"Action"
            }
        ]
    }

    public selectValue(value:any)
    {
        if(value == "All"){
            this.topType = "Movies and TV Shows";
        }
        else{
            this.topType = value;
        }
        this.dashboardService.onSelectType(value);
    }

}
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'movie-tile',
    templateUrl: './movie-tile.component.html',
    styleUrls: ['./movie-tile.component.less']
})

export class MovieTileComponent implements OnInit {
    public testArray: any;
    public arrayOfKeys: any;
    public testArray2: any;
    public serialDetails: any;
    public selectedType:any = 'All';
    public SelectTypes:any[];

    private selectTypeSubscription: Subscription;

    constructor(private dashboardService: DashboardService) {

      this.SelectTypes = ['All', 'Movies', 'TV Shows']
        this.testArray2 = [
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
                "title":"Chalo",
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
        ];
        this.serialDetails = [
            {
                "title":"Friends",
                "serial_id":"2222",
                "year":"1994",
                "Genre":"Comedy"
            },
            {
                "title":"100",
                "serial_id":"3333",
                "year":"2014",
                "Genre":"Action"
            },
            {
                "title":"Lost in Space",
                "serial_id":"4444",
                "year":"2018",
                "Genre":"Sci Fi"
            },
            {
                "title":"Walking Dead",
                "serial_id":"5555",
                "year":"2010",
                "Genre":"Sci Fi"
            },
            {
                "title":"Young Sheldon",
                "serial_id":"6666",
                "year":"2016",
                "Genre":"Comedy"
            },
            {
                "title":"Stranger Things",
                "serial_id":"7777",
                "year":"2018",
                "Genre":"Sci Fi"
            }
        ];  
    }

    public ngOnInit():void
    {
      this.selectTypeSubscription = this.dashboardService.selectTypeChange.subscribe((selectType:string) => 
      {
        console.log(selectType);
        this.selectedType = selectType;
      })
    }
}
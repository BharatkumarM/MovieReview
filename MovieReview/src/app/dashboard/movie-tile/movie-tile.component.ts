import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';
import { Subscription } from 'rxjs/Subscription';
declare let $:any;

@Component({
  selector: 'movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.less']
})

export class MovieTileComponent implements OnInit {
  public testArray: any;
  public arrayOfKeys: any;
  public movieDetails: any[];
  public serialDetails: any[];
  public ind:any = "";

  constructor(private dashboardService: DashboardService) {
    this.movieDetails = [
      {
        "title": "Baahubali",
        "movie_id": "1234",
        "year": "2015",
        "genre": "Action"
      },
      {
        "title": "Baahubali2",
        "movie_id": "1235",
        "year": "2018",
        "genre": "Action"
      },
      {
        "title": "Deadpool2",
        "movie_id": "1236",
        "year": "2017",
        "genre": "Comedy"
      },
      {
        "title": "Dark Night",
        "movie_id": "1237",
        "year": "2013",
        "genre": "Adventure"
      },
      {
        "title": "Chalo",
        "movie_id": "1238",
        "year": "2019",
        "genre": "Romance"
      },
      {
        "title": "Avengers",
        "movie_id": "1239",
        "year": "2014",
        "genre": "Action"
      }
    ]
    this.serialDetails = [
      {
        "title": "Friends",
        "serial_id": "2222",
        "year": "1994",
        "genre": "Comedy"
      },
      {
        "title": "100",
        "serial_id": "3333",
        "year": "2014",
        "genre": "Action"
      },
      {
        "title": "Lost in Space",
        "serial_id": "4444",
        "year": "2018",
        "genre": "Sci Fi"
      },
      {
        "title": "Walking Dead",
        "serial_id": "5555",
        "year": "2010",
        "genre": "Sci Fi"
      },
      {
        "title": "Young Sheldon",
        "serial_id": "6666",
        "year": "2016",
        "genre": "Comedy"
      },
      {
        "title": "Stranger Things",
        "serial_id": "7777",
        "year": "2018",
        "genre": "Sci Fi"
      }
    ];
  }

  public ngOnInit(): void {
      
  }
}
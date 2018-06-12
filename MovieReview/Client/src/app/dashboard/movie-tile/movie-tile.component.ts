import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';
import { Subscription } from 'rxjs/Subscription';
import { MovieTileService } from './movie-tile.service'
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

  private data:any;

  constructor(private dashboardService: DashboardService, private movieTileService: MovieTileService) {
    this.movieTileService.getMovieDetails().subscribe((resp: any) => 
    { 
      this.movieDetails = resp 
    });
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
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class MovieTileService
{
    private SERVER_URL: string = 'http://127.0.0.1:5000/';

    constructor(private http: Http)
    {
        
    }

    public getMovieDetails(): Observable<any>
    {
        return this.http.get(this.SERVER_URL + 'getMovieDetails').map((res:any) => res.json());
    }
}
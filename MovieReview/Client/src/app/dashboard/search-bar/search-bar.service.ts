import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class SearchBarService
{
    private SERVER_URL: string = 'http://127.0.0.1:5000/';

    constructor(private http: Http)
    {
        
    }

    public getSearchDetails(): Observable<any>
    {
        return this.http.get(this.SERVER_URL + 'getSearchDetails').map((res:any) => res.json());
    }
}
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService 
{
    public selectedType:string = "";
    public selectTypeChange:any;

    private selectTypeSubject = new Subject<string>();

    constructor()
    {
        this.selectTypeChange = this.selectTypeSubject.asObservable();
    }

    public onSelectType(value:any)
    {
        this.selectTypeSubject.next(value)
    }
}
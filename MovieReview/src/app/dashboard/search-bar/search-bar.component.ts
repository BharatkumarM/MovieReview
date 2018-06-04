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

    public searchList:any;
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
    }

    public selectValue(value:any)
    {
        this.dashboardService.onSelectType(value);
    }

}
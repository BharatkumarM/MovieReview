import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { DashboardService } from './../dashboard.service';
import { SearchBarService } from './search-bar.service';
declare let $: any;

@Component({
    selector: 'app-search',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {
    public try : any;
    public showTop = true;
    public search: any;
    public searchList: any;
    public searchResult: any;
    public searchKeys:any;
    constructor(private dashboardService: DashboardService, private searchbarservice: SearchBarService) {
        this.searchbarservice.getSearchDetails().subscribe((resp: any) => 
        { 
          this.searchResult = resp;
        });
    }
    
    // if(search == undefined){
    //     console.log("hai her");
    // }
    onSearchChange(searchValue : string ) { 

    }
    findResult(x:any){
        console.log(x);
        alert(x);
    }

    public ngOnInit(): void {
        this.searchList = ['All', 'Movies', 'TV Shows'];
        $('#example').focus(function () {
            $('div.example').show();
            $(document).bind('focusin.example click.example', function (e) {
                if ($(e.target).closest('.example, #example').length) return;
                $(document).unbind('.example');
                $('div.example').fadeOut(10);
            });
        });
        $('div.example').hide();

        $('.seachInput').keyup(function() {
  
            // If value is not empty
            if ($(this).val().length == 0) {
              // Hide the element
              $('.top').show();
            } else {
              // Otherwise show it
              $('.top').hide();
            }
          }).keyup();
    }
}
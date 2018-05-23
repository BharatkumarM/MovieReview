import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
    imports: [],
    declarations: [
        DashboardComponent,
        NavigationComponent,
        SearchBarComponent
        ],
    providers: []
})

export class DashBoardModule
{
}
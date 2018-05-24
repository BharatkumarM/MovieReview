import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
    imports: [CommonModule],
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
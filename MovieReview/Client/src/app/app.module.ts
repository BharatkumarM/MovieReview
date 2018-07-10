import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.route';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { SearchBarComponent } from './dashboard/search-bar/search-bar.component';
import { MovieTileComponent } from './dashboard/movie-tile/movie-tile.component';
import { SortPipe } from './dashboard/shared/sort-by-pipe';
import { DashboardService } from './dashboard/dashboard.service';
import { SearchFilterPipe } from './dashboard/shared/search-pipe';
import { MovieTileService } from './dashboard/movie-tile/movie-tile.service'
import { HomePageComponent } from './dashboard/home-page/home-page.component';
import { SearchBarService } from './dashboard/search-bar/search-bar.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchBarComponent,
    MovieTileComponent,
    SortPipe,
    SearchFilterPipe,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [
    DashboardService,
    MovieTileService,
    SearchBarService
  ],
  exports: [
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

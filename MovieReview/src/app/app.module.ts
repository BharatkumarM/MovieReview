import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.route';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { SearchBarComponent } from './dashboard/search-bar/search-bar.component';
import { MovieTileComponent } from './dashboard/movie-tile/movie-tile.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchBarComponent,
    MovieTileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

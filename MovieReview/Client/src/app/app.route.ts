import { Routes, RouterModule } from '@angular/router';
import { MovieTileComponent } from './dashboard/movie-tile/movie-tile.component'
import { MovieDetailsComponent} from './dashboard/movie-details/movie-details.component';

export const routes: Routes = [
    {
        path: '', component: MovieTileComponent
    },
    {
        path: 'movies', component: MovieDetailsComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);

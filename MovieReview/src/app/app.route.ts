import { Routes, RouterModule } from '@angular/router';
import { MovieTileComponent } from './dashboard/movie-tile/movie-tile.component'

export const routes: Routes = [
    {
        path: '', component: MovieTileComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);

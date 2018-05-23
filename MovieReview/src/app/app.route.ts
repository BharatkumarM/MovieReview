import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'

export const routes: Routes = [
    {
        path: '', component: DashboardComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);

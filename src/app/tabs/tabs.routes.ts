import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'account',
                loadComponent: () => import('./profile/profile.page').then((m) => m.ProfilePage),
            },
            {
                path: '',
                redirectTo: '/tabs/account',
                pathMatch: 'full',
            },
        ]
    }
];
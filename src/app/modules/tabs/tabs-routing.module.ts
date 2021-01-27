import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'qr',
        loadChildren: () => import('./../qr-code/qr-code.module').then(m => m.QrCodePageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('./../google-map/google-map.module').then(m => m.GoogleMapPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {
}

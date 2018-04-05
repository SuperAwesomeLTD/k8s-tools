import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClustersPageComponent } from './pages/clusters-page/clusters-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    data: { title: 'Login' }
  },
  {
    path: 'clusters',
    component: ClustersPageComponent,
    data: { title: 'Cluster List' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'others',
    redirectTo: '/clusters',
    canActivate: [AuthGuardService]
  },
  { path: '',
    redirectTo: '/clusters',
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  { path: '**', component: ClustersPageComponent } // page not found
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuardService
  ]
})
export class AppRoutingModule { }

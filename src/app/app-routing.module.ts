import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClustersPageComponent } from './pages/clusters-page/clusters-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ClusterInfoPageComponent } from './pages/cluster-info-page/cluster-info-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'clusters',
    component: ClustersPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'cluster/:id',
    component: ClusterInfoPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    redirectTo: 'clusters',
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  { path: '**', component: NotFoundPageComponent }
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

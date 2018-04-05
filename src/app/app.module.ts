import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClustersPageComponent } from './pages/clusters-page/clusters-page.component';
import { ClusterListComponent } from './components/cluster-list/cluster-list.component';

const appRoutes: Routes = [
  {
    path: 'clusters',
    component: ClustersPageComponent,
    data: { title: 'Cluster List' }
  },
  { path: '',
    redirectTo: '/clusters',
    pathMatch: 'full'
  },
  { path: '**', component: ClustersPageComponent } // page not found
];

@NgModule({
  declarations: [
    AppComponent,
    ClustersPageComponent,
    ClusterListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

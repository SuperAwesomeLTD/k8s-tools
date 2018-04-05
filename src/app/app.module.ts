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

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ClustersPageComponent } from './pages/clusters-page/clusters-page.component';
import { ClusterListComponent } from './components/cluster-list/cluster-list.component';
import { AuthService } from './services/auth.service';
import { globals } from '../environments/globals';

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
    AngularFireModule.initializeApp(globals.firebaseConf),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

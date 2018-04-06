import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatCheckboxModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { ClustersPageComponent } from './pages/clusters-page/clusters-page.component';
import { ClusterListComponent } from './components/cluster-list/cluster-list.component';
import { AuthService } from './services/auth.service';
import { globals } from '../environments/globals';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AddClusterModalComponent } from './components/add-cluster-modal/add-cluster-modal.component';
import { ClustersService } from './services/clusters.service';

@NgModule({
  declarations: [
    AppComponent,
    ClustersPageComponent,
    ClusterListComponent,
    ToolbarComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    AddClusterModalComponent
  ],
  imports: [
    FormsModule,
    AngularFireModule.initializeApp(globals.firebaseConf),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    ClustersService,
    AngularFirestore,
  ],
  entryComponents: [
    AddClusterModalComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClustersPageComponent } from './components/clusters-page/clusters-page.component';

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
    ClustersPageComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

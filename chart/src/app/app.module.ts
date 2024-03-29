import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './component/chart/chart.component';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChartWomenComponent } from './component/chart-women/chart-women.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
 
// import {Firestore} from '@angular/fire/firestore'
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SearchPageComponent } from './component/search-page/search-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestbaseComponent } from './component/testbase/testbase.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    HomeComponent,
    NavBarComponent,
    ChartWomenComponent,
    AppComponent,
    SearchPageComponent,
    TestbaseComponent,
   
  ],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    BrowserModule, FormsModule ,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatTreeModule,
    // AngularFireModule.initializeApp(environment),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConFig)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    // Firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

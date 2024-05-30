/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
// import { DashboardComponent } from './layouts/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule, HttpClientModule, StoreModule.forRoot({}, {})],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
*/

<<<<<<< HEAD
import { NgModule, isDevMode } from '@angular/core';
=======
import { NgModule } from '@angular/core';
>>>>>>> origin/master
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { StoreModule } from '@ngrx/store';
<<<<<<< HEAD
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; // Importa EffectsModule
=======
import { EffectsModule } from '@ngrx/effects'; // Importa EffectsModule
>>>>>>> origin/master

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
<<<<<<< HEAD
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), // Agrega EffectsModule.forRoot([])
=======
    EffectsModule.forRoot([]), // Agrega EffectsModule.forRoot([])
>>>>>>> origin/master
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}

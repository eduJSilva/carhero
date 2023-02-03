import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBusquedaComponent } from './form-busqueda/form-busqueda.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CarsComponent } from './cars/cars.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { ValesalidaComponent } from './valesalida/valesalida.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialDetailComponent } from './material-detail/material-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';

import { HotkeyModule } from 'angular2-hotkeys';

@NgModule({
  declarations: [
    AppComponent,
    FormBusquedaComponent,
    MessagesComponent,
    DashboardComponent,
    CarDetailComponent,
    CarsComponent,
    CarSearchComponent,
    ValesalidaComponent,
    MaterialDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { delay: 500, dataEncapsulation: false }
),
ReactiveFormsModule,
MatAutocompleteModule,
MatSelectModule,
 HotkeyModule.forRoot(),
BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

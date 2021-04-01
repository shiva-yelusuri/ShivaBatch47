import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeesevaComponent } from './aboutmeeseva/aboutmeeseva.component';
import { GovernmnetformsComponent } from './governmnetforms/governmnetforms.component';
import { GovernmentordersComponent } from './governmentorders/governmentorders.component';
import { ServicesComponent } from './services/services.component';
import { MeesevaphysicalformComponent } from './meesevaphysicalform/meesevaphysicalform.component';
import { DocumentsneededforeachservicesComponent } from './documentsneededforeachservices/documentsneededforeachservices.component';
import { InaugurationComponent } from './inauguration/inauguration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeesevaComponent,
    GovernmnetformsComponent,
    GovernmentordersComponent,
    ServicesComponent,
    MeesevaphysicalformComponent,
    DocumentsneededforeachservicesComponent,
    InaugurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

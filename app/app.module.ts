import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    EnquiryComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './components/app.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GetPeopleComponent } from './get-people/get-people.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, InfiniteScrollComponent, PageNotFoundComponent, GetPeopleComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

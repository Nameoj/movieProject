import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieHoverDirective } from './movie-hover.directive';
import { DisplayMovieDirective } from './display-movie.directive';

@NgModule({
  declarations: [
    AppComponent,
    MovieHoverDirective,
    DisplayMovieDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

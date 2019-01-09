import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorsListComponent } from './actors/actors-list/actors-list.component';
import { ActorsDetailsComponent } from './actors/actors-details/actors-details.component';
import { IndividualActorComponent } from './actors/individual-actor/individual-actor.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    ActorsComponent,
    ActorsListComponent,
    ActorsDetailsComponent,
    IndividualActorComponent,
    MovieDetailsComponent,
    MovieListComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

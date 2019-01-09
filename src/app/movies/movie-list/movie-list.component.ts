import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [
    new Movie('Black Hawk Down',
      'Movie About the Black haawk going down',
      'https://upload.wikimedia.org/wikipedia/commons/8/81/ProvideComfortBlackHawkvillage.jpg'
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}

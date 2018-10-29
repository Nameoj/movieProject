import { Component } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Project';
  name: string;
  img: Url;
  showMovies: boolean = true;

  movieList: object[] = [{"name":"The Dark Knight", 
                        "uri":"http://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg"},
                        {"name":"Forrest Gump", 
                          "uri":"http://fr.web.img4.acsta.net/pictures/15/10/13/15/12/514297.jpg"},
                          {"name":"Le Dernier samouraï", 
                          "uri":"http://fr.web.img5.acsta.net/medias/nmedia/18/35/14/62/18369417.jpg"},
                          {"name":"Matrix", 
                          "uri":"http://fr.web.img5.acsta.net/r_1280_720/medias/04/34/49/043449_af.jpg"},
                          {"name":"Inception", 
                          "uri":"http://fr.web.img6.acsta.net/r_1280_720/medias/nmedia/18/72/34/14/19476654.jpg"},
                          {"name":"Avengers: Infinity War", 
                          "uri":"http://fr.web.img4.acsta.net/r_1280_720/pictures/18/03/16/14/42/0611719.jpg"}];
  }

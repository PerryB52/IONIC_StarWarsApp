2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.films = this.api.getFilms();
  }

  openDetails(film) {
    let split = film.url.split('/');
    let filmId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
  }
}
import { Component, OnInit } from '@angular/core';
import { BasicsService } from '../basics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  results;
  constructor(private basicService: BasicsService) { }

  ngOnInit(): void {
    this.results = this.basicService.getRecipes();
  }

}

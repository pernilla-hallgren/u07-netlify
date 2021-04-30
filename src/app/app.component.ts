import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { AuthStateService } from './shared/auth-state.service';
import { FavouriteListService } from './recipes/favourite-list/favourite-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isSignedIn: boolean;

  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public favouriteListService: FavouriteListService
  ) {
  }

  ngOnInit() {
    this.auth.userAuthState.subscribe(val => {
        this.isSignedIn = val;
        if(val) {
          this.favouriteListService.getAllFavouriteLists()
        }
    });

  }

  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
    this.favouriteListService.favouriteListSubjectValue = [];
  }

}

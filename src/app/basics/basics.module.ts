import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsRoutingModule } from './basics-routing.module';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    // PageNotFoundComponent,
    // HomeComponent
  ],
  imports: [
    CommonModule,
    BasicsRoutingModule
  ]
})
export class BasicsModule { }

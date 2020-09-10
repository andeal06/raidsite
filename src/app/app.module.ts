import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RaidWingsComponent } from './raid-wings/raid-wings.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CompsComponent } from './comps/comps.component';
import { BuildsComponent } from './builds/builds.component';
import { Wing1Component } from './wing1/wing1.component';
import { Wing2Component } from './wing2/wing2.component';
import { Wing3Component } from './wing3/wing3.component';
import { Wing4Component } from './wing4/wing4.component';
import { Wing5Component } from './wing5/wing5.component';
import { Wing6Component } from './wing6/wing6.component';
import { Wing7Component } from './wing7/wing7.component';
import { Wing1vgComponent } from './wing1vg/wing1vg.component';
import { Wing1srComponent } from './wing1sr/wing1sr.component';
import { Wing1gorsComponent } from './wing1gors/wing1gors.component';
import { Wing1sabComponent } from './wing1sab/wing1sab.component';
import { StrikesComponent } from './strikes/strikes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RaidWingsComponent,
    HomepageComponent,
    CompsComponent,
    BuildsComponent,
    Wing1Component,
    Wing2Component,
    Wing3Component,
    Wing4Component,
    Wing5Component,
    Wing6Component,
    Wing7Component,
    Wing1vgComponent,
    Wing1srComponent,
    Wing1gorsComponent,
    Wing1sabComponent,
    StrikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

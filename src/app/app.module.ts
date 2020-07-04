import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RaidWingsComponent } from './raid-wings/raid-wings.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CompsComponent } from './comps/comps.component';
import { BuildsComponent } from './builds/builds.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RaidWingsComponent,
    HomepageComponent,
    CompsComponent,
    BuildsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

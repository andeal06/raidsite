import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Built components 
import { BuildsComponent } from './builds/builds.component'
import { CompsComponent } from './comps/comps.component'
import { HomepageComponent } from './homepage/homepage.component';
import { RaidWingsComponent } from './raid-wings/raid-wings.component'
import { Wing1Component } from './wing1/wing1.component';
import { Wing2Component } from './wing2/wing2.component';
import { Wing3Component } from './wing3/wing3.component';
import { Wing5Component } from './wing5/wing5.component';
import { Wing4Component } from './wing4/wing4.component';
import { Wing6Component } from './wing6/wing6.component';
import { Wing7Component } from './wing7/wing7.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'builds', component: BuildsComponent},
  { path: 'comps', component: CompsComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'raids', component: RaidWingsComponent},
  // wing routes
  { path: 'wing1', component: Wing1Component},
  { path: 'wing2', component: Wing2Component},
  { path: 'wing3', component: Wing3Component},
  { path: 'wing4', component: Wing4Component},
  { path: 'wing5', component: Wing5Component},
  { path: 'wing6', component: Wing6Component},
  { path: 'wing7', component: Wing7Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Built components 
import { BuildsComponent } from './builds/builds.component'
import { CompsComponent } from './comps/comps.component'
import { HomepageComponent } from './homepage/homepage.component';
import { RaidWingsComponent } from './raid-wings/raid-wings.component'

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'builds', component: BuildsComponent},
  { path: 'comps', component: CompsComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'raids', component: RaidWingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

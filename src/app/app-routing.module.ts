import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FlatBenchComponent } from './pension-service/flat-bench/flat-bench.component';
import { FoodReservationComponent } from './food-reservation/food-reservation.component';
import { FoodComponent } from './pension-service/food/food.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'food', component: FoodComponent },
  { path: 'food-reservation', component: FoodReservationComponent },
  { path: 'flat-bench', component: FlatBenchComponent },
  { path: 'play', component: PlayComponent },
  { path: 'story', component: StoryComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeVideoComponent } from './home/home-video/home-video.component';
import { HomeReviewComponent } from './home/home-review/home-review.component';
import { HomeRecommendComponent } from './home/home-recommend/home-recommend.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { AboutComponent } from './about/about.component';
import { FoodComponent } from './food/food.component';
import { FoodReservationComponent } from './food-reservation/food-reservation.component';
import { GoogleSheetService } from './google-sheet.service';
import { HttpClientModule } from '@angular/common/http';
import { FlatBenchComponent } from './flat-bench/flat-bench.component';
import { FacilitiesComponent } from './about/facilities/facilities.component';
import { BBQComponent } from './about/BBQ/BBQ.component';
import { MapComponent } from './about/map/map.component';
import { PlayComponent } from './play/play.component';
import { ValleyComponent } from './play/valley/valley.component';
import { WalkComponent } from './play/walk/walk.component';
import { MountainClimbingComponent } from './play/mountain-climbing/mountain-climbing.component';
import { HistoricSiteComponent } from './play/historic-site/historic-site.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    HomeVideoComponent,
    HomeReviewComponent,
    HomeRecommendComponent,
    BottomBarComponent,
    AboutComponent,
    FoodComponent,
    FoodReservationComponent,
    FlatBenchComponent,
    FacilitiesComponent,
    BBQComponent,
    MapComponent,
    PlayComponent,
    ValleyComponent,
    WalkComponent,
    MountainClimbingComponent,
    HistoricSiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    YouTubePlayerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    CdkAccordionModule,
    BrowserAnimationsModule,
    MatStepperModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [GoogleSheetService],
  bootstrap: [AppComponent],
})
export class AppModule {}

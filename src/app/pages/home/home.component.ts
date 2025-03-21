import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewFormComponent } from '../../features/reviews/review-form/review-form.component';
import { CommonModule } from '@angular/common';
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    TranslateModule,
    CommonModule,
    HowItWorksComponent,
    ReviewsComponent,
    ReviewFormComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  videoLoaded = false;

  swiperConfig = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    slideToClickedSlide: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 80,
      depth: 200,
      modifier: 1.5,
      slideShadows: false,
    },
    modules: [EffectCoverflow, Pagination, Navigation],
  };

  onVideoLoaded() {
    this.videoLoaded = true;
  }
}

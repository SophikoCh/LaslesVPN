import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionEasyVPNComponent } from './section-easy-vpn/section-easy-vpn.component';
import { SectionStatisticsComponent } from './section-statistics/section-statistics.component';
import { SectionFeaturesComponent } from './section-features/section-features.component';
import { SectionPlanComponent } from './section-plan/section-plan.component';
import { SectionGlobalComponent } from './section-global/section-global.component';
import { SectionFeedbackComponent } from './section-feedback/section-feedback.component';
import { SectionSubscribtionComponent } from './section-subscribtion/section-subscribtion.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionEasyVPNComponent,
    SectionStatisticsComponent,
    SectionFeaturesComponent,
    SectionPlanComponent,
    SectionGlobalComponent,
    SectionFeedbackComponent,
    SectionSubscribtionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

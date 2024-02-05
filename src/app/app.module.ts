import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './side-nav/nav.component';
import { StaticHeaderComponent } from './static-header/static-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { SupportTeamComponent } from './support-team/support-team.component';
import { FeaturedDealsComponent } from './featured-deals/featured-deals.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StaticHeaderComponent,
    HomeComponent,
    FavoriteComponent,
    HelpCenterComponent,
    SupportTeamComponent,
    FeaturedDealsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SupportTeamComponent } from './support-team/support-team.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { FeaturedDealsComponent } from './featured-deals/featured-deals.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'support-team', component: SupportTeamComponent },
  { path: 'help-center', component: HelpCenterComponent },
  { path: 'featured-deals', component: FeaturedDealsComponent },
  { path: '**', component: FeaturedDealsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

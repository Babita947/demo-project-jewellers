import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SupportTeamComponent } from './support-team/support-team.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { FeaturedDealsComponent } from './featured-deals/featured-deals.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  {
    path: 'favorite',
    component: FavoriteComponent,
    data: { title: 'Favorites' },
  },
  {
    path: 'support-team',
    component: SupportTeamComponent,
    data: { title: 'Text an Expert' },
  },
  {
    path: 'help-center',
    component: HelpCenterComponent,
    data: { title: 'Help Center' },
  },
  {
    path: 'featured-deals',
    component: FeaturedDealsComponent,
    data: { title: 'Feature Deals' },
  },
  { path: '**', component: FeaturedDealsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

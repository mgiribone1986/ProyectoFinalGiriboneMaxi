import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking.component';

const routes: Routes = [
  /**
   * Path actual: /dashboard/Ranking
   */
  {
    path: '',
    component: RankingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankingRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './ranking.component';
import { MatTableModule } from '@angular/material/table'; // Importa MatTableModule
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    RankingComponent
  ],
  imports: [
    CommonModule,
    RankingRoutingModule,
    MatTableModule,
    MatCardModule,
    MatIconModule 
  ]
})
export class RankingModule { }

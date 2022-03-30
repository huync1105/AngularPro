import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaiSanModule } from './tai-san/tai-san.module';
import { QuanTriComponent } from './quan-tri.component';
import { QuanTriRoutingModule } from './quan-tri-routing.module';

@NgModule({
  declarations: [
    QuanTriComponent
  ],
  imports: [
    CommonModule,
    QuanTriRoutingModule,
    TaiSanModule,
  ],
  exports: [
    QuanTriComponent
  ]
})
export class QuanTriModule { }

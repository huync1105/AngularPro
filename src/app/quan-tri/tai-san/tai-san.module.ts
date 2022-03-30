import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaiSanComponent } from './tai-san.component';
import { DanhGiaNhaCungUngComponent } from './danh-gia-nha-cung-ung/danh-gia-nha-cung-ung.component';
import { TaiSanRoutingModule } from './tai-san-routing.module';
import { TableComponent } from 'src/app/dynamic-table/table/table.component';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    TaiSanComponent,
    DanhGiaNhaCungUngComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    TaiSanRoutingModule,
    TableModule,
    FormsModule,
    InputTextModule
  ],
  exports: [
    TaiSanComponent,
    DanhGiaNhaCungUngComponent,
    TableComponent
  ]
})
export class TaiSanModule { }

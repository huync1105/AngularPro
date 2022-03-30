import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DanhGiaNhaCungUngComponent } from './danh-gia-nha-cung-ung/danh-gia-nha-cung-ung.component';

const routes: Routes = [
  {path:'', redirectTo: 'quytrinhdanhgiancu', pathMatch: 'full'},
  {path:'quytrinhdanhgiancu', component: DanhGiaNhaCungUngComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaiSanRoutingModule { }

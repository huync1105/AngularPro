import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuanTriComponent } from './quan-tri.component';
import { TaiSanModule } from './tai-san/tai-san.module';

const routes: Routes = [
  {path:'', redirectTo:'quantri', pathMatch:'full'},
  {path:'quantri', children:[
    {path:'', redirectTo: 'taisan', pathMatch: 'full'},
    {path:'taisan', loadChildren: () => import('./tai-san/tai-san.module').then(m => m.TaiSanModule)}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanTriRoutingModule { }

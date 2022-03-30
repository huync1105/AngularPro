import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuanTriModule } from './quan-tri/quan-tri.module';

const routes: Routes = [
  {path:'', redirectTo: 'quantri', pathMatch: 'full'},
  {path:'quantri', loadChildren: () => import('./quan-tri/quan-tri.module').then(m => m.QuanTriModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

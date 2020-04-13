import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkinListComponent } from './skin-list/skin-list.component';


const routes: Routes = [
  {
    path: 'skins', component: SkinListComponent,
    children:[]
  },
  { path: '', redirectTo: 'skins', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

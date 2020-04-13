import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomSkinListComponent } from './custom-skin-list/custom-skin-list.component';


const routes: Routes = [
  {
    path: 'custom-skins', component: CustomSkinListComponent,
    children:[]
  },
  { path: '', redirectTo: 'custom-skins', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

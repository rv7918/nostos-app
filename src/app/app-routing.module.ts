import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { ListComponent } from './components/list/list.component';
import  { DetailsComponent } from './components/details/details/details.component'

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'details/:i', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

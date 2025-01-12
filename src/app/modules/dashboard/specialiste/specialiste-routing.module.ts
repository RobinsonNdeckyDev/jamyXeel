import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecDashComponent } from './spec-dash/spec-dash.component';

const routes: Routes = [
  { path: '', component: SpecDashComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialisteRoutingModule { }

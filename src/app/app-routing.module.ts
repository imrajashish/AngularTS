import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

const routes: Routes = [
  {
    path: 'dataBinding',
    component: DataBindingComponent
  },
  {
    path: 'interpolation',
    component: InterpolationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { MaterialComponent } from './material/material.component';
import { MatComponent } from './mat/mat.component';



const routes: Routes = [
  {path:'mat',component:MatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

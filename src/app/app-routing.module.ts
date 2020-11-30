import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ByDesignComponent} from './by-design/by-design.component';
import {MyDesignComponent} from './my-design/my-design.component';

const routes: Routes = [
  { path: '', component: MyDesignComponent },
  { path: 'second-example', component: ByDesignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

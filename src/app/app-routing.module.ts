import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeviewComponent } from './treeview/treeview.component';

import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [ { path:  'tree-View' , component : TreeviewComponent },
{ path: '', component: CalculatorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

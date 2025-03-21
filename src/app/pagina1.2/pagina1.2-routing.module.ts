import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina12Page } from './pagina1.2.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina12PageRoutingModule {}

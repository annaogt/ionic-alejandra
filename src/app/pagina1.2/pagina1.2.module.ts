import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina12PageRoutingModule } from './pagina1.2-routing.module';

import { Pagina12Page } from './pagina1.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina12PageRoutingModule
  ],
  declarations: [Pagina12Page]
})
export class Pagina12PageModule {}

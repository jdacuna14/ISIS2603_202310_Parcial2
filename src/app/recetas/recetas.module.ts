import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasComponent } from './recetas.component';
import { RecetaDetalleComponent } from './recetaDetalle/recetaDetalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecetasComponent, RecetaDetalleComponent],
  exports: [RecetasComponent]
})
export class RecetasModule { }

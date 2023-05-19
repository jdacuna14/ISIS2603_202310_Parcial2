import { Component, Input, OnInit } from '@angular/core';
import { Receta } from '../receta';

@Component({
  selector: 'app-recetaDetalle',
  templateUrl: './recetaDetalle.component.html',
  styleUrls: ['./recetaDetalle.component.css']
})
export class RecetaDetalleComponent implements OnInit {

  @Input() receta!: Receta;

  constructor() { }

  ngOnInit() {
  }

}

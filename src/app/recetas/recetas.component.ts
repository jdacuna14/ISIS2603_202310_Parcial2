import { Component, OnInit } from '@angular/core';
import { Receta } from './receta';
import { RecetasService } from './recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetas: Array<Receta> = [];
  average: number = 0;
  total: number = 0;

  constructor(private recetasService: RecetasService) { }

  getRecetas(): void {
    this.recetasService.getRecetas().subscribe((recetas) => {
      this.recetas = recetas;
    });
  }

  getAverage(): number {
    let total: number = 0;
    this.recetas.forEach((receta) => total+= receta.estrellas);
    let average: number = total/this.recetas.length;
    return average;
  }

  getTotal(): number {
    let total: number = 0;
    this.recetas.forEach((receta) => total+= receta.cantidadOpiniones);
    return total;
  }

  ngOnInit() {
    this.getRecetas;
    this.getAverage;
    this.getTotal;
  }

}

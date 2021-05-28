import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Hulk', "Ironman", 'Thor'];
  heroeBorrado?: string = "";


  //Dos posibles soluciones: con el operador opcional '?'
  // o con los pipes OR '||' para que retorne un string vacío
  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
    console.log( this.heroeBorrado );
  }

}

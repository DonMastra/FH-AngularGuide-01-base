import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Hulk', "Ironman", 'Thor'];

  borrarHeroe() {
    console.log( 'Borrando heroe...' );

  }

}

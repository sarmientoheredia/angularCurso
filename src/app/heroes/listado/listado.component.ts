import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

heroes:string[]=['Iroman','Spiderman','Himan','Batman'];
heroeBorrado:string='';



borando(){
  this.heroeBorrado= this.heroes.shift() || '';

}
}

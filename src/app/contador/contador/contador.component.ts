import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
    <h1>{{title}}</h1>

<h3>LA BASE ES : <strong>{{base}}</strong></h3>


<button (click)="acumular(base)">{{base}}</button>

<span>{{numero}}</span>

<button (click)="acumular(-base)">- {{base}}</button>
`
})
export class ContadorComponent{
    title = 'Contador app';
    numero : number=0;
    base   : number=5;
  
  
    //creo un metodo para incrementar y otro para decrementar
    acumular(valor:number){
      this.numero+=valor;
    }
}
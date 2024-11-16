import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { SilderComponent } from '../silder/silder.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule,SilderComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, OnChanges,OnDestroy, DoCheck{
  contador =0 ;

  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.contador++;
    console.log('On Changes: ', this.contador, changes);
  }
  ngOnInit(): void {
    console.log('Ejecucion del OnInit')
  }
  ngDoCheck(): void {
    this.contador++;
    console.log('Do Checked: ', this.contador);
  }
  ngOnDestroy(): void {
    console.log('Componente destruido.');
  }
  valorDelHijo: number|null = null;

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  imgUrl = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  onEmit(valor:number){
    this.valorDelHijo=valor;
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-silder',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './silder.component.html',
  styleUrl: './silder.component.scss'
})
export class SilderComponent {
  @Input() title: string='';
  @Output() emisor= new EventEmitter<number>();
  value=0;

  cambioSlider(valor: number){
    this.emisor.emit(valor);
  }
}

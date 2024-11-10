import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-what',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './what.component.html',
  styleUrl: './what.component.css'
})
export class WhatComponent {
  public zenklas="+";
  public skaicius=0;
  public daugiklis=0;
  public rezultatas="";

  public skaiciuoti(){
    if(this.zenklas=="+") this.rezultatas="Skaiciu suma: "+(this.skaicius+this.daugiklis);
    if(this.zenklas=="-") this.rezultatas="Skaiciu skirtumas: "+(this.skaicius-this.daugiklis);
    if(this.zenklas=="*") this.rezultatas="Skaiciu sandauga: "+(this.skaicius*this.daugiklis);
    if(this.zenklas=="/") this.rezultatas="Skaiciu dalmuo: "+(this.skaicius/this.daugiklis);
  }

}

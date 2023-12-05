import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  resultado : number = 2;
  numero1 : number = 5;
  numero2 : number = 7;

  sumarNumeros(){
    //alert("Suma de números")
    this.resultado = this.numero1+this.numero2;
  }

  restarNumeros(){
    //alert("Resta de números")
    this.resultado = this.numero1-this.numero2
  }

  multiplicarNumeros(){
    //alert("Multiplicación de números")
    this.resultado = this.numero1*this.numero2
  }

  dividirNumeros(){
    if(this.numero2 == 0)
      alert("No se puede realizar la división")
    else{
      //alert("División de números")
      this.resultado = this.numero1/this.numero2
    }
  }

  iniciarCampos(){
    this.resultado = 0;
    this.numero1 = 0;
    this.numero2 = 0;
  }
}

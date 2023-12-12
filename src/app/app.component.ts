import {
  Component,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-signal-example';

  // writable signals, los signals pueden ser de tipo escritura o de
  // solo lectura
  public count = signal(0);
  public salute = signal('');
  public date = signal(+new Date());
  // public dateToHuman: Signal<string>

  constructor() {
    // seteamos un nuevo valor al signal count
    // this.count.set(1)

    // podemos usar el valor previo del signal para calcular el
    // siguiente valor con "update"
    // this.count.update(prev => prev + 1)

    // podemos derivar o parsear los datos del signal para mostrarlo
    // como queramos, en este caso tenemos una fecha y queremos
    // mostrarla de forma mas legible
    // this.dateToHuman = computed(()=>{
    //   const date = new Date(this.date());

    //   return date.toDateString();
    // })

    // los signals creados con "computed" son de SOLO LECTURA
    // this.dateToHuman.set()  // --> error

    // seteamos un nuevo valor al signal salute
    // this.salute.set('hola')

    // setInterval(() => {
    //   this.salute.update((prev) => prev + 'a');
    // }, 1000);


    effect(() => {
      // console.log(`The current count is: ${this.count()}`);
      // console.log(`The current salute is: ${this.salute()}`);
      // console.log(`The current date is: ${this.date()}`);
      // console.log(`The current dateToHuman is: ${this.dateToHuman()}`);
    });
  }
}

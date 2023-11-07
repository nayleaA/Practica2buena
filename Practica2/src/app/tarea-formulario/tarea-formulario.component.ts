import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../mi-componente/models/tarea.model';


@Component({
  selector: 'app-tarea-formulario',
  templateUrl: './tarea-formulario.component.html',
})

export class TareaFormularioComponent {
  @Output("onAddTarea") emitter:EventEmitter<Tarea>; //si no le ponemos un string toma el valor dela variable que declaramos el emiter

  constructor(){
    this.emitter=new EventEmitter();
  }

  emitirTarea(titulo: string, descripcion: string): void {
    const tarea:Tarea={
      titulo,
      descripcion,
      status:'Pendiente'  //para los que no estan defidos usamos los :, para los que si no es necesario
    };
    this.emitter.emit(tarea);// para emitir la tarea que se acaba de crear
  }
}

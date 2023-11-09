import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TareaCardItem } from '../mi-componente/models/tarea-card-item.model';
import { Tarea } from "../mi-componente/models/tarea.model";
import{TareaStatus} from "src/app/enum/tarea-status.enum"

@Component({
  selector: 'app-tarea-card',
  templateUrl: './tarea-card.component.html',
})

export class TareaCardComponent {
  @Input()
  tarea!: Tarea; //establecer como un componente, !: operador de confianza (nostros lo resolvemos)
  
  @Input() //atributos de entrada
   indice: number=-1;//establecer el indice del arreglo, -1 posicion no valida

   @Output("onStatusChange")emitter:EventEmitter<TareaCardItem>;
   
   tareaStatus={
    Completado:TareaStatus.Completado,
    Retrasado:TareaStatus.Retrasado,
    Pendiente:TareaStatus.Pendiente
   }
    // atributos de salida, EventEmiter emisor de eventos,"nombre del evento", tiene que tener tipado lo que va a retornar, 

   constructor() {//emitir los cambios sobre la tarea
    this.emitter=new EventEmitter();
   }

  cambiarStatus(status:TareaStatus): void {
    this.tarea.status=status;

    this.emitter.emit({ //para declarar lo que reciba inicializar valores, objetos JSON
      indice: this.indice,
      tarea:this.tarea
    });
    }
}

import { Component } from '@angular/core';


@Component({
  selector: 'app-tarea-formulario',
  templateUrl: './tarea-formulario.component.html',
})

export class TareaFormularioComponent {
  emitirTarea(titulo: string, descripcion: string): void {
    // Aquí puedes realizar la lógica que necesites con los valores de título y descripción.
    console.log('Título:', titulo);
    console.log('Descripción:', descripcion);
    
  }
}

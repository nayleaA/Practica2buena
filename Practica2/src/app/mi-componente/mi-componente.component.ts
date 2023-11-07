import { Component, OnInit } from '@angular/core';
import { Tarea } from './models/tarea.model';
import { MenuItem } from './models/menu-item.model';
import { TareaCardItem } from './models/tarea-card-item.model';
import { ActiveMenuItem } from './models/active-menu-item.model';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})

export class MiComponenteComponent implements OnInit {
  //opciones del menu
  activeMenuItem: MenuItem = { item: 'Mis tareas', active: false };
  activeMenuItemIndex:number=1;

  //lista de tareas guardadas
  tareas: Tarea[] = [];
  newTarea: Tarea = {
    titulo: '', 
    descripcion: '',
    status: 'Pendiente'
  };
  menuItems: any;

  constructor() {

  }

  ngOnInit(): void {
    const tareasJson = localStorage.getItem("tareas");
    if (tareasJson != null) {
      this.tareas = JSON.parse(tareasJson);
    }
  }

  public catchMenuItem(item: ActiveMenuItem): void {
    this.activeMenuItem = item.menuItem;
    this.activeMenuItemIndex=item.activeIndex;
  }

 
  public cambiarStatus(index: number, status: string): void {
    this.tareas[index].status = status;
    this.almacenarDatos();
  }

  private almacenarDatos(): void {
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }

  catchOnStatusChange(info:TareaCardItem){//recibe el TareaCardItem
    let {indice, tarea}=info;
    this.tareas[indice]=tarea;
  }

  catchOnAddTarea(tarea: Tarea){
    this.tareas.push(tarea);
    
    //almacenar datos
    this.almacenarDatos();

    //navegar a la lista
    this.activeMenuItemIndex=1;
    
  }

}
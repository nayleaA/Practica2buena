import { Component, OnInit } from '@angular/core';
import { Tarea } from './models/tarea.model';
import { MenuItem } from './models/menu-item.model';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})

export class MiComponenteComponent implements OnInit {
  activeMenuItem: MenuItem = { item: 'Mis tareas', active: false };
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

  public setMenuItemAsActive(item: number): void {
    for (let x = 0; x < this.menuItems.length; x++) {
      if (x === item) {
        this.menuItems[x].active = true;
      } else {
        this.menuItems[x].active = false;
      }
    }
  }

  public catchMenuItem(item: MenuItem): void {
    this.activeMenuItem = item;
  }

  public addTarea(): void {
    this.tareas.push(this.newTarea);
    this.newTarea = {
      titulo: '',
      descripcion: '',
      status: 'Pendiente'
    };
    this.setMenuItemAsActive(1);
    this.almacenarDatos();
  }

  public cambiarStatus(index: number, status: string): void {
    this.tareas[index].status = status;
    this.almacenarDatos();
  }

  private almacenarDatos(): void {
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }
}
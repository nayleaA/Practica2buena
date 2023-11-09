import { Component,EventEmitter,Output ,Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { ActiveMenuItem } from '../mi-componente/models/active-menu-item.model';
import { MenuItem } from '../mi-componente/models/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges{
  menuItems: MenuItem[] = [];

  @Input() activeIndex:number=1;

  @Output("onMenuItemActiveChange") emitter: EventEmitter<ActiveMenuItem>;

  constructor() {
    // let item1: MenuItem = {item: '', active: false};
    // this.menuItems.push(item1);
    this.menuItems.push({ item: 'Nueva tarea', active: false });
    this.menuItems.push({ item: 'Mis tareas', active: true });

    this.emitter = new EventEmitter();
  }
/*onInit se ejecuta para los ciclos de vida, para actualizar y renderizar, pero despues del constructor*/
  ngOnInit(): void {
    this.setMenuItemAsActive(this.activeIndex);
  }

  /*recibe los cambios, se ejecuta cuando los atributos definidos como Input cambian su valor, funciona como un array, */
  ngOnChanges(changes: SimpleChanges): void {
    //extraemos el cambio del componente
    let firstChange=changes['activeIndex'].firstChange;
    //validacion de que si es la primera vez no hagas nada y salte.  Y continua abajo.
    if(firstChange){
      return;
    }
    //obtengo el valor del item
    let currentValue=changes['activeIndex'].currentValue;
    //que vuelva a emitir el valor del item al menu
    this.setMenuItemAsActive(currentValue);
}


  public setMenuItemAsActive(item: number): void {
    for (let x = 0; x < this.menuItems.length; x++) {
        if (x == item) {
            this.menuItems[x].active = true;

            this.activeIndex=x;
            
            this.emitter.emit({
              activeIndex:this.activeIndex,
              menuItem:this.menuItems[x]
            } );
            continue;
        }

        this.menuItems[x].active = false;
      }
    }

}

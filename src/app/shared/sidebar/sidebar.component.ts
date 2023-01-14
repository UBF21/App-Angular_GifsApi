import { Component, Input} from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  seleccionado:boolean = false;
  valorSeleccionado:string = "";
 

  constructor(private service:GifsService) { }


  get obtenerHistorial(): string[]{
    return this.service.historial;
  }

  buscar(valor:string){
    this.valorSeleccionado = valor;
    this.service.buscarGifs(valor);
    }
}

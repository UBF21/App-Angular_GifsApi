import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit{

  @ViewChild("txtBuscar") txtBuscar!: ElementRef<HTMLInputElement>;



  constructor(private services: GifsService) {
  }
  
  ngOnInit(): void {
  }




  buscar(valor: string) {

    const valorActual: string = this.txtBuscar.nativeElement.value || "";
    this.services.buscarGifs(valorActual);
    this.txtBuscar.nativeElement.value = "";
   
  }
  
 
}

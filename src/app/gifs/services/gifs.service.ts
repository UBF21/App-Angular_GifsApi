import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem("historial")!) || [];
    this.resultados = JSON.parse(localStorage.getItem("resultados")!) || [];
  }


  private _historial: string[] = [];
  public resultados: Gif[] = [];


  private API_KEY: string = "o6kgRnBJKC1gndv2UzV5nuqIXXOARCei";
  private SERVICIO_URL: string = "https://api.giphy.com/v1/gifs";

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {

    if (query.trim().length === 0) { return; }

    if (!this._historial.includes(query)) {

      this._historial.unshift(query.toLocaleLowerCase());
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem("historial", JSON.stringify(this._historial));
    }


    const params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.SERVICIO_URL}/search`, { params })
      .subscribe((res) => {
        this.resultados = res.data;
        localStorage.setItem("resultados", JSON.stringify(this.resultados));
      });

  }


}

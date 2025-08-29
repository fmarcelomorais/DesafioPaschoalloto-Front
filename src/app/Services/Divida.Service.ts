import { HttpClient } from "@angular/common/http";
import { Divida } from "../interfaces/Divida";
import { Observable } from "rxjs";
import { Listagem } from "../interfaces/Listagem";
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class DividaService
{
    private api = "https://localhost:7263/api/Titulo"

    constructor(private http: HttpClient){}

    salvarDivida(divida: Divida): Observable<Divida>
    {
        return this.http.post<Divida>(this.api, divida);
    }

    obterDivida(numeroTitulo: number): Observable<Listagem>
    {
        return this.http.get<Listagem>(`${this.api}/${numeroTitulo}`)
    }

    obterDividas(): Observable<Listagem>
    {
        return this.http.get<Listagem>(this.api)
    }
}
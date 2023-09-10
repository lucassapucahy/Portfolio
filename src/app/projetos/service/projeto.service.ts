import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Projeto } from 'src/app/models/Projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  constructor(private http : HttpClient) { }

  apiUrl = `${environment.apiUrl}/Projetos`;

  Listar():Observable<Projeto[]>{
    return this.http.get<Projeto[]>(this.apiUrl);
  }

}

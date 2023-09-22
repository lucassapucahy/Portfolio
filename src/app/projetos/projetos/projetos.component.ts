import { ProjetoService } from './../service/projeto.service';
import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/models/Projeto';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  Projetos:Projeto[] = []

  constructor(private service: ProjetoService) { }

  ngOnInit(): void {
    this.service.Listar().subscribe({
      next: (projetos) => this.Projetos = projetos,
      error: (e) => console.error(e)
    })
  }

}

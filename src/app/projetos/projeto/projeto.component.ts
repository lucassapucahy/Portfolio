import { Component, Input, OnInit } from '@angular/core';
import { Projeto } from 'src/app/models/Projeto';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  @Input()
  Projeto: Projeto = {
    Id: 0,
    Nome: 'string',
    Url: 'string',
    Descricao: 'string',
    Tecnologias: ['string']
  }

  constructor() { }

  ngOnInit(): void {
  }

}

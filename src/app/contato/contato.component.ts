import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  emailEnviado: boolean = false;

  contato: Contato = {
    Nome: '',
    Email: '',
    Empresa: '',
    Cel: '',
    Mensagem: ''
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.emailEnviado = params['emailEnviado'] === '1';
    });
  }

  formatPhoneNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    const valor = input.value.replace(/\D/g, '');
    const valorFormatado = this.FormatoNumero(valor);
    input.value = valorFormatado;
  }

  private FormatoNumero(value: string): string {
    const matches = value.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (matches) {
      return `(${matches[1]})${matches[2]}-${matches[3]}`;
    }
    return value;
  }

  onSubmit() : void {
    const navigationExtras = {
      queryParams: { emailEnviado: '1' }
    };

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const currentUrl = this.router.url + '?';
    this.router.navigateByUrl(currentUrl).then(() => {
      this.router.navigated = false;
      this.router.navigate([this.router.url], navigationExtras);
    });

  }

}

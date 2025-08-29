import { Component } from '@angular/core';
import { DividaService } from '../../Services/Divida.Service';
import { Conteudo, Listagem } from '../../interfaces/Listagem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})

export class ListagemComponent {

  title = "Listagem de dividas"

  
  conteudo: Conteudo = {
    nomeDevedor: '',
    numeroTitulo: 0,
    parcelas: [],
    diasEmAtraso: 0,
    quantidadeParcelas: 0,
    valorAtualizado:0,
    valorOriginal:0,
  }
  
  listagem: Listagem = {
    conteudo: [],
    mensagem: ''
  }
  listagens: Listagem[] = []


  constructor(private dividaService: DividaService){}

  ngOnInit(): void
  {
    this.dividaService.obterDividas().subscribe({
      next: (res: Listagem) => {
        this.listagem = res 
        console.log(res)
      },
      error: (err: string) => console.log(err)
    })
  }


}

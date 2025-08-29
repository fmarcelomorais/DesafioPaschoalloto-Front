import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Divida } from '../../interfaces/Divida';
import { Parcela } from '../../interfaces/Parcela';
import { DividaService } from '../../Services/Divida.Service';
import Swal from 'sweetalert2'
import { Titulo } from '../../interfaces/Titulo';
import { Devedor } from '../../interfaces/Devedor';



@Component({
  selector: 'app-formulario-component',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './formulario-component.component.html',
  styleUrl: './formulario-component.component.css'
})
export class FormularioComponentComponent {

  formDivida! : FormGroup;

  devedor: Devedor = {
    nome: '',
    cpf: ''
  };

  parcelas: Parcela[] = [];

  titulo: Titulo = {
    numero: 0,
    devedor: this.devedor,
    diasAtraso: 0,
    parcelas: this.parcelas,
    valorTotalParcela: 0
  }

  divida: Divida = 
  {
    titulo: this.titulo,
    juros: 0,
    multa:0,
    valorAtualizado:0

  };
  
  constructor(private dividaService: DividaService){}


  ngOnInit(): void
  {
    this.formDivida = new FormGroup({
      numeroTitulo: new FormControl('', [Validators.required]),
      nomeDevedor: new FormControl(),
      cpfDevedor: new FormControl(),
      juros: new FormControl([Validators.required]),
      multa: new FormControl([Validators.required]),
      numeroParcela: new FormControl(),
      vencimentoParcela: new FormControl([Validators.required]),
      valorParcela: new FormControl([Validators.required])
    });
  }

  cadastrarParcelas():void 
  { 
    const novaParcela: Parcela = {
      numero: this.formDivida.get('numeroParcela')?.value,
      valor: this.formDivida.get('valorParcela')?.value,
      vencimento: this.formDivida.get('vencimentoParcela')?.value,
      diasAtraso: 0,
      valorAtualizado: 0
    }
    this.parcelas.push(novaParcela);
  }


  submit(): void 
  {
    this.titulo.numero = this.formDivida.get('numeroTitulo')?.value;
    this.devedor.nome = this.formDivida.get('nomeDevedor')?.value;
    this.devedor.cpf = this.formDivida.get('cpfDevedor')?.value;
    this.divida.juros = this.formDivida.get('juros')?.value;
    this.divida.multa = this.formDivida.get('multa')?.value;

    this.dividaService.
      salvarDivida(this.divida)
      .subscribe({
        next: (res) =>
        {
          Swal.fire("Divida Cadastrada");
        },
        error(err) {           
            Swal.fire("Não foi possivel cadastrar a divida");
        },
      });
      console.log(this.divida)
  }
}

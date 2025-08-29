import {Parcela} from './Parcela';


export interface Listagem
{   
    mensagem: string,
    conteudo: Conteudo[]
}

export interface Conteudo
{
    numeroTitulo: number, 
    nomeDevedor: string, 
    quantidadeParcelas: number,
    valorOriginal: number, 
    diasEmAtraso: number, 
    valorAtualizado: number,
    parcelas: Parcela[],
}
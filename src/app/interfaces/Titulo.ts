import { Devedor } from "./Devedor";
import { Parcela } from "./Parcela";

export interface Titulo
{
    numero: number,
    devedor: Devedor,
    parcelas: Parcela[]
    diasAtraso:number,
    valorTotalParcela: number
}
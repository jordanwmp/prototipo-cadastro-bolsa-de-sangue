import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalSelectedService {

  _date = new Date()

  public novo_hemocomponente = {
    registro:'',
    data: this._date.toISOString().slice(0,10),
    hora: `${this._date.getHours()}:${this._date.getMinutes()}`,
    tipoDeHemocomponente: '',
    contentradoDeHermacias:'',
    numeroDaFracao:'',
    concentradoDePlaquetas:'',
    tipoSanguineo:'',
    fatorRH:'',
    numeroDaBolsa: '',
    amostraDoTuboColetor:'',
    volume: '',
    validade:'',
    situacaoDaBolsa:'',
    situcacaoBolsaExplicacao:'',
    segmentoDaBolsa:'',
    observacao:'',
    justificativaEdicao:''
  }
  constructor() { }
}

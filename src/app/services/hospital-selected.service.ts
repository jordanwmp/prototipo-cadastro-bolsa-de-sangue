import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalSelectedService {

  subscriptions$ = new Subject<any[]>();

  private _date = new Date()

  public novo_hemocomponente:any = {
    registro: '',
    data: this._date.toISOString().slice(0, 10),
    hora: `${this._date.getHours()}:${this._date.getMinutes()}`,
    tipoDeHemocomponente: '',
    concentradoDeHermacias: '',
    numeroDaFracao: '',
    concentradoDePlaquetas: '',
    tipoSanguineo: '',
    fatorRH: '',
    numeroDaBolsa: '',
    amostraDoTuboColetor: '',
    volume: '',
    validade: '',
    situacaoDaBolsa: '',
    situcacaoBolsaExplicacao: '',
    segmentoDaBolsa: '',
    observacao: '',
    justificativaEdicao: ''
  }

  private data: any[] = [
    {
      registro: '123',
      data: this._date.toISOString().slice(0, 10),
      hora: `${this._date.getHours()}:${this._date.getMinutes()}`,
      tipoDeHemocomponente: 'Concentrado de Hemácias',
      concentradoDeHermacias: 'Concentrado de Hemácias Filtrado – CHF',
      numeroDaFracao: '10',
      concentradoDePlaquetas: 'Concentrado de Plaquetas Filtrado – CPF',
      tipoSanguineo: 'O',
      fatorRH: 'Inconclusivo',
      numeroDaBolsa: '3456',
      amostraDoTuboColetor: 'Lorem ipsum',
      volume: '10',
      validade: '2023-04-10',
      situacaoDaBolsa: 'Apta',
      situcacaoBolsaExplicacao: 'Lorem ipsum',
      segmentoDaBolsa: 'Lorem ipsum',
      observacao: 'lorem ipsum',
      justificativaEdicao: 'lorem ipsum'
    },
    {
      registro: '123',
      data: this._date.toISOString().slice(0, 10),
      hora: `${this._date.getHours()}:${this._date.getMinutes()}`,
      tipoDeHemocomponente: 'Concentrado de Hemácias',
      concentradoDeHermacias: 'Concentrado de Hemácias Filtrado – CHF',
      numeroDaFracao: '10',
      concentradoDePlaquetas: 'Concentrado de Plaquetas Filtrado – CPF',
      tipoSanguineo: 'O',
      fatorRH: 'Inconclusivo',
      numeroDaBolsa: '3456',
      amostraDoTuboColetor: 'Lorem ipsum',
      volume: '10',
      validade: '2023-04-10',
      situacaoDaBolsa: 'Apta',
      situcacaoBolsaExplicacao: 'Lorem ipsum',
      segmentoDaBolsa: 'Lorem ipsum',
      observacao: 'lorem ipsum',
      justificativaEdicao: 'lorem ipsum'
    },
    {
      registro: '123',
      data: this._date.toISOString().slice(0, 10),
      hora: `${this._date.getHours()}:${this._date.getMinutes()}`,
      tipoDeHemocomponente: 'Concentrado de Hemácias',
      concentradoDeHermacias: 'Concentrado de Hemácias Filtrado – CHF',
      numeroDaFracao: '10',
      concentradoDePlaquetas: 'Concentrado de Plaquetas Filtrado – CPF',
      tipoSanguineo: 'O',
      fatorRH: 'Inconclusivo',
      numeroDaBolsa: '3456',
      amostraDoTuboColetor: 'Lorem ipsum',
      volume: '10',
      validade: '2023-04-10',
      situacaoDaBolsa: 'Apta',
      situcacaoBolsaExplicacao: 'Lorem ipsum',
      segmentoDaBolsa: 'Lorem ipsum',
      observacao: 'lorem ipsum',
      justificativaEdicao: 'lorem ipsum'
    },
    {
      registro: '123',
      data: this._date.toISOString().slice(0, 10),
      hora: `${this._date.getHours()}:${this._date.getMinutes()}`,
      tipoDeHemocomponente: 'Concentrado de Hemácias',
      concentradoDeHermacias: 'Concentrado de Hemácias Filtrado – CHF',
      numeroDaFracao: '10',
      concentradoDePlaquetas: 'Concentrado de Plaquetas Filtrado – CPF',
      tipoSanguineo: 'O',
      fatorRH: 'Inconclusivo',
      numeroDaBolsa: '3456',
      amostraDoTuboColetor: 'Lorem ipsum',
      volume: '10',
      validade: '2023-04-10',
      situacaoDaBolsa: 'Apta',
      situcacaoBolsaExplicacao: 'Lorem ipsum',
      segmentoDaBolsa: 'Lorem ipsum',
      observacao: 'lorem ipsum',
      justificativaEdicao: 'lorem ipsum'
    },
    
  ]

  constructor() { }

  addData(data:any)
  {
    const new_data = {...data}
    this.data.push(new_data)
    this.subscriptions$.next(this.data)
  }

  getData()
  {
    return this.subscriptions$.asObservable()
  }

  removeData(index:number)
  {
    this.data.splice(index, 1)
  }

  clearHemocomponents()
  {
    for(let key of Object.keys(this.novo_hemocomponente))
    {
      this.novo_hemocomponente[`${key}`] = ''
    }
  }

  get dataList():any[]
  {
    return this.data
  }

  editData(index:number, data:any)
  {
    this.data[index] = data;
  }

}

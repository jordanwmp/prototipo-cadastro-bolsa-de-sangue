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
    hora:  this.formatData(this._date.getHours(), this._date.getMinutes()), //`${this._date.getHours()}:${this._date.getMinutes()}`,
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
    situacaoDaBolsa: 'situacao_da_bolsa',
    situcacaoBolsaExplicacao: '',
    segmentoDaBolsa: '',
    observacao: '',
    justificativaEdicao: ''
  }

  private data: any[] = [
    {
      registro: '1493612949',
      data: '2019-11-09',
      hora: `08:00`,
      tipoDeHemocomponente: 'Concentrado de Hemácias',
      concentradoDeHermacias: 'Concentrado de Hemácias Filtrado – CHF',
      numeroDaFracao: '10',
      concentradoDePlaquetas: 'Concentrado de Plaquetas Filtrado – CPF',
      tipoSanguineo: 'O',
      fatorRH: 'Inconclusivo',
      numeroDaBolsa: '1973',
      amostraDoTuboColetor: 'Lorem ipsum',
      volume: '50',
      validade: '2022-01-02',
      situacaoDaBolsa: 'Não apta',
      situcacaoBolsaExplicacao: 'Lorem ipsum',
      segmentoDaBolsa: 'Lorem ipsum',
      observacao: 'lorem ipsum',
      justificativaEdicao: 'lorem ipsum'
    },
    {
      registro: '4312846192',
      data: '2021-01-02',//this._date.toISOString().slice(0, 10),
      hora: `11:00`,
      tipoDeHemocomponente: 'Concentrado de Hemácias',
      concentradoDeHermacias: 'Concentrado de Hemácias Filtrado – CHF',
      numeroDaFracao: '10',
      concentradoDePlaquetas: 'Concentrado de Plaquetas Filtrado – CPF',
      tipoSanguineo: 'O',
      fatorRH: 'Negativo',
      numeroDaBolsa: '9346',
      amostraDoTuboColetor: 'Lorem ipsum',
      volume: '80',
      validade: '2022-09-11',
      situacaoDaBolsa: 'Apta',
      situcacaoBolsaExplicacao: 'Lorem ipsum',
      segmentoDaBolsa: 'Lorem ipsum',
      observacao: 'lorem ipsum',
      justificativaEdicao: 'lorem ipsum'
    },
    {
      registro: '9572948719',
      data: '2021-01-13',//this._date.toISOString().slice(0, 10),
      hora: `14:15`,
      tipoDeHemocomponente: 'Concentrado de Hemácias',
      concentradoDeHermacias: 'Concentrado de Hemácias Filtrado – CHF',
      numeroDaFracao: '10',
      concentradoDePlaquetas: 'Concentrado de Plaquetas Filtrado – CPF',
      tipoSanguineo: 'O',
      fatorRH: 'Inconclusivo',
      numeroDaBolsa: '3613',
      amostraDoTuboColetor: 'Lorem ipsum',
      volume: '30',
      validade: '2023-05-10',
      situacaoDaBolsa: 'Não apta',
      situcacaoBolsaExplicacao: 'Lorem ipsum',
      segmentoDaBolsa: 'Lorem ipsum',
      observacao: 'lorem ipsum',
      justificativaEdicao: 'lorem ipsum'
    },
    {
      registro: '8591874918',
      data: '2020-12-12',//this._date.toISOString().slice(0, 10),
      hora: `16:30`,
      tipoDeHemocomponente: 'Concentrado de Hemácias',
      concentradoDeHermacias: 'Concentrado de Hemácias Filtrado – CHF',
      numeroDaFracao: '10',
      concentradoDePlaquetas: 'Concentrado de Plaquetas Filtrado – CPF',
      tipoSanguineo: 'O',
      fatorRH: 'Positivo',
      numeroDaBolsa: '3713',
      amostraDoTuboColetor: 'Lorem ipsum',
      volume: '40',
      validade: '2023-04-10',
      situacaoDaBolsa: 'Apta',
      situcacaoBolsaExplicacao: 'Lorem ipsum',
      segmentoDaBolsa: 'Lorem ipsum',
      observacao: 'lorem ipsum',
      justificativaEdicao: 'lorem ipsum'
    },
    
  ]

  formatData(hour:number|string, minute:number|string)
  {
    if(hour.toString().length < 2)
    {
      hour =  '0' + hour
    }

    if(minute.toString().length < 2)
    {
      minute =  '0' + minute
    }

    return `${hour}:${minute}`
  }

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
      if(key !== 'data' && key !== 'hora')
      {
        this.novo_hemocomponente[`${key}`] = ''
      }
      if(key === 'situacaoDaBolsa')
      {
        this.novo_hemocomponente[`${key}`] = 'situacao_da_bolsa'
      }
    }
  }

  get dataList():any[]
  {
    return this.data
  }

  editData(index:number, data:any)
  {
    const new_data = {...data}
    this.data[index] = new_data;
  }

}

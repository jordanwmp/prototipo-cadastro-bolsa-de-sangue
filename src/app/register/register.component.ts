import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HospitalSelectedService } from '../services/hospital-selected.service';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  input_homocomponent_label: string = '*';
  disabled_input_homocomponent: boolean = true;
  homocomponent:string = '';
  homocomponentOptions:any[] = []
  tipo_homocomponents: string[] = [
    'Concentrado de Hemácias',
    'Concentrado de Plaquetas',
    'Plasma Fresco Congelado – PFC',
    'Crioprecipitado – Crio'
  ]
  concentrado_de_hermacias: string[] = [
    'Concentrado de Hemácias',
    'Concentrado de Hemácias Filtrado – CHF',
    'Concentrado de Hemácias Filtrado e Irradiado – CHFI',
    'Concentrado de Hemácias por Aférese- CHA',
    'Concentrado de hemácia Lavado',
    'Fração de Concentrado de Hemácias - FCH',
    'Fração de Concentrado de Hemácias Filtrado – FCHF',
    'Fração de Concentrado de Hemácias Filtrado e Irradiado – FCHFI',
    'Fração Concentrado de Hemácia Lavado'
    /*'Unidade Pediátrica de Concentrado Hemácias Filtrado – UPCHF',
    'Unidade Pediátrica de Concentrado Hemácias Filtrado Irradiado – UPCHFI',
    'Unidade Pediátrica de Concentrado Hemácias – UPCH',*/
  ]
  concentrado_de_plaquetas: string[] = [
    'Concentrado de Plaquetas Filtrado – CPF',
    'Concentrado de Plaquetas Filtrado e Irradiado – CPFI',
    'Concentrado de Plaquetas por aférese – CPA)'

  ]

  _date = new Date()

  situacaoDaBolsa:string = 'situacao_da_bolsa'

  columnsChange:number = 6;
  showNumberOfFraction:boolean = false
  selectHemocomponente:any = ''

  constructor(
    public hospital: HospitalSelectedService,
  ) { 
    //hospital.novo_hemocomponente.hora = '16:05'
    console.log('hora tt ', hospital.novo_hemocomponente.hora)
  }


  toggleHemocomponent()
  {
    if(this.hospital.novo_hemocomponente.concentradoDeHermacias.indexOf('Fração') !== -1)//this.selectHemocomponente.indexOf('Fração') !== -1
      {
        this.columnsChange = 4
        this.showNumberOfFraction = true
        return
      }
      else
      {
        this.columnsChange = 6
        this.showNumberOfFraction = false
      }
  }

  toogle() 
  {
    console.log('toolgle')

    if(this.hospital.novo_hemocomponente.tipoDeHemocomponente === 'Concentrado de Hemácias')//this.homocomponent === 'Concentrado de Hemácias'
    {
      this.input_homocomponent_label = 'Concentrado de Hemácias';
      this.disabled_input_homocomponent = false;
      this.homocomponentOptions = this.concentrado_de_hermacias;
      return;
    }


    if(this.hospital.novo_hemocomponente.tipoDeHemocomponente === 'Concentrado de Plaquetas')//this.homocomponent === 'Concentrado de Plaquetas'
    {
      this.input_homocomponent_label = 'Concentrado de Plaquetas';
      this.disabled_input_homocomponent = false;
      this.homocomponentOptions = this.concentrado_de_plaquetas;

      this.columnsChange = 6
      this.showNumberOfFraction = false

      return;
    }

    this.input_homocomponent_label = '*';
    this.disabled_input_homocomponent = true;
    this.homocomponentOptions = [];
    
    this.columnsChange = 6
    this.showNumberOfFraction = false

  }

  register()
  {
    console.log('reg ', this.hospital.novo_hemocomponente)
    this.hospital.addData(this.hospital.novo_hemocomponente)
    setTimeout(()=>{
      this.hospital.clearHemocomponents()
    }, 500)
  }


  ngOnInit(): void {
    //this.hospital.novo_hemocomponente.data = this._date.toISOString().slice(0,10)
    //this.hospital.novo_hemocomponente.hora = (this._date.getHours() + ':' + this._date.getMinutes())
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { HospitalSelectedService } from '../services/hospital-selected.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-hemocomponentes',
  templateUrl: './lista-hemocomponentes.component.html',
  styleUrls: ['./lista-hemocomponentes.component.css']
})
export class ListaHemocomponentesComponent implements OnInit {

  @Input() newData:any;
  data:any[] = []

  constructor(
    private hospital: HospitalSelectedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('onInit list');
    this.data = [...this.hospital.dataList]

    this.hospital.getData().subscribe((data)=>{
      console.log('data from subscribe ', data)
      this.data = [...data]//this.hospital.dataList
    })
  }

  addData()
  {
    this.data.push(this.newData);
  }


  callEdit(hemocomponent:any, id:string|number)
  {
    this.hospital.novo_hemocomponente = hemocomponent
    this.router.navigate(['/editar-hemocomponente', id])
  }

}

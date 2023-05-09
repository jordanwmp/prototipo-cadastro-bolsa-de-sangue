import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalSelectedService } from '../services/hospital-selected.service';

@Component({
  selector: 'app-select-hospital',
  templateUrl: './select-hospital.component.html',
  styleUrls: ['./select-hospital.component.css']
})
export class SelectHospitalComponent implements OnInit {

  selectHospital:any = ''

  constructor(
    private router: Router,
    private hospital: HospitalSelectedService
  ) { }

  callRegister()
  {
    localStorage.setItem('hospitalSelected', this.selectHospital);
    this.router.navigate(['/cadastrar-hemocomponentes']);
  }

  toggleHospital(){}

  ngOnInit(): void {
  }

}

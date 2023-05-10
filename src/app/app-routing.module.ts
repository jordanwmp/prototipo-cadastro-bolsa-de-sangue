import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListaHemocomponentesComponent } from './lista-hemocomponentes/lista-hemocomponentes.component';
import { SelectHospitalComponent } from './select-hospital/select-hospital.component';
import { EditHemocomponentComponent } from './edit-hemocomponent/edit-hemocomponent.component';

const routes: Routes = [
  { path: '',   redirectTo: '/selecionar-hospital', pathMatch: 'full' }, 
  {
    path: 'lista-hemocomponentes',
    component: ListaHemocomponentesComponent
  },
  {
    path: 'cadastrar-hemocomponentes',
    component: RegisterComponent
  },
  {
    path: 'selecionar-hospital',
    component: SelectHospitalComponent
  },
  {
    path: 'editar-hemocomponente/:id',
    component: EditHemocomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

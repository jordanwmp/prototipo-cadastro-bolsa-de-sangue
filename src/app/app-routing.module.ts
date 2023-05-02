import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListaHemocomponentesComponent } from './lista-hemocomponentes/lista-hemocomponentes.component';

const routes: Routes = [
  { path: '',   redirectTo: '/lista-hemocomponentes', pathMatch: 'full' }, 
  {
    path: 'lista-hemocomponentes',
    component: ListaHemocomponentesComponent
  },
  {
    path: 'cadastrar-hemocomponentes',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

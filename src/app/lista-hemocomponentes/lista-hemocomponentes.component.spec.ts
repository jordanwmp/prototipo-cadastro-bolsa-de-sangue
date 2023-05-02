import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHemocomponentesComponent } from './lista-hemocomponentes.component';

describe('ListaHemocomponentesComponent', () => {
  let component: ListaHemocomponentesComponent;
  let fixture: ComponentFixture<ListaHemocomponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaHemocomponentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHemocomponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

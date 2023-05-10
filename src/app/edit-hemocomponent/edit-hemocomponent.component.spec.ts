import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHemocomponentComponent } from './edit-hemocomponent.component';

describe('EditHemocomponentComponent', () => {
  let component: EditHemocomponentComponent;
  let fixture: ComponentFixture<EditHemocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHemocomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHemocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

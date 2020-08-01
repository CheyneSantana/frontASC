import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTitulosIndividuaisComponent } from './listar-titulos-individuais.component';

describe('ListarTitulosIndividuaisComponent', () => {
  let component: ListarTitulosIndividuaisComponent;
  let fixture: ComponentFixture<ListarTitulosIndividuaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTitulosIndividuaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTitulosIndividuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

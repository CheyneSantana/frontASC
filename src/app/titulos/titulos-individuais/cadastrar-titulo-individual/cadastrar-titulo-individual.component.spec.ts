import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTituloIndividualComponent } from './cadastrar-titulo-individual.component';

describe('CadastrarTituloIndividualComponent', () => {
  let component: CadastrarTituloIndividualComponent;
  let fixture: ComponentFixture<CadastrarTituloIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarTituloIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarTituloIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

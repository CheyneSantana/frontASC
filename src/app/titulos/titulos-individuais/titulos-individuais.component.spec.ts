import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosIndividuaisComponent } from './titulos-individuais.component';

describe('TitulosIndividuaisComponent', () => {
  let component: TitulosIndividuaisComponent;
  let fixture: ComponentFixture<TitulosIndividuaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitulosIndividuaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulosIndividuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

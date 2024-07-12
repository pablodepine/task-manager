import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTarefaComponent } from './tarefa-form.component';

describe('CadastroTarefaComponent', () => {
  let component: CadastroTarefaComponent;
  let fixture: ComponentFixture<CadastroTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroTarefaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

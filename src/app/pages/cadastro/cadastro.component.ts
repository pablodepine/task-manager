import { Component, EventEmitter, Output } from '@angular/core';
import { TarefaFormComponent } from '../../componentes/tarefa-form/tarefa-form.component';
import { Tarefa } from '../../models/tarefa';
import { Router } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [TarefaFormComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  @Output() cadastroSubmit = new EventEmitter<any>();

  constructor(
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  criaTarefa(tarefa: Tarefa) {
    this.sharedDataService.setTarefa(tarefa);
    this.router.navigate(['home']);
  }
}

import { Component } from '@angular/core';
import { TarefaFormComponent } from '../../componentes/tarefa-form/tarefa-form.component';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [TarefaFormComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  criaTarefa(tarefa: Tarefa) {
    console.log(tarefa);
  }
}

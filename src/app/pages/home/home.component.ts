import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DragDropModule, CadastroComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  exibeCadastroTemplate = false;

  board = [
    {
      name: 'A fazer',
      cards: [
        {
          titulo: 'Task 1',
          prioridade: 'Alta',
          descricao: 'descricao for task 1',
        },
        {
          titulo: 'Task 2',
          prioridade: 'Média',
          descricao: 'descricao for task 2',
        },
      ],
    },
    {
      name: 'Em progresso',
      cards: [
        {
          titulo: 'Task 3',
          prioridade: 'Alta',
          descricao: 'descricao for task 3',
        },
        {
          titulo: 'Task 4',
          prioridade: 'Alta',
          descricao: 'descricao for task 4',
        },
      ],
    },
    {
      name: 'Feito',
      cards: [
        {
          titulo: 'Task 5',
          prioridade: 'Alta',
          descricao: 'descricao for task 5',
        },
        {
          titulo: 'Task 6',
          prioridade: 'Alta',
          descricao: 'descricao for task 6',
        },
      ],
    },
  ];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.tarefa$.subscribe((tarefa) => {
      if (tarefa) {
        this.board[0].cards.unshift(tarefa);
      }
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  // adicionaTarefa() {
  //   this.router.navigate(['/cadastro']);
  // }
}

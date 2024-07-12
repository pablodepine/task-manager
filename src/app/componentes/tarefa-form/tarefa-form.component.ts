import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'app-tarefa-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './tarefa-form.component.html',
  styleUrl: './tarefa-form.component.scss',
})
export class TarefaFormComponent implements OnInit {
  @Output() submit = new EventEmitter<Tarefa>();
  cadastroForm!: FormGroup;

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      prioridade: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      this.submit.emit(this.cadastroForm.value);
    }
  }
}

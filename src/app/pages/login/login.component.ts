import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { MOCK_USERS } from '../../../assets/mock/mock-users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user!: Usuario;
  showAlert = false;
  private users = MOCK_USERS;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
    });

    console.log(this.users);
  }

  onSubmit() {
    this.user = this.loginForm.value;
    const userValid = { nome: this.users.usuario, senha: this.users.senha };
    if (
      this.user.nome === userValid.nome &&
      this.user.senha === userValid.senha
    ) {
      sessionStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/home']);
    } else {
      this.showAlert = true;
    }
  }
}

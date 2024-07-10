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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user!: Usuario;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.user = this.loginForm.value;
    sessionStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigate(['/home']);
  }
}

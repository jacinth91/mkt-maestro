import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="gradient-bg" style="height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div style="width: 100%; max-width: 400px; padding: 32px;">
        <h1 style="font-size: 32px; margin-bottom: 32px; text-align: center;">Welcome Back</h1>
        
        <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
          <div style="margin-bottom: 24px;">
            <input 
              type="text" 
              class="input-field"
              placeholder="Username"
              [(ngModel)]="username"
              name="username"
              required
            >
            
            <input 
              type="password" 
              class="input-field"
              placeholder="Password"
              [(ngModel)]="password"
              name="password"
              required
            >
          </div>

          <button 
            type="submit" 
            class="btn-primary" 
            style="width: 100%;"
          >
            Sign In
          </button>

          <p *ngIf="error" style="color: #ff4444; margin-top: 16px; text-align: center;">
            {{ error }}
          </p>
        </form>
      </div>
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid credentials. Use guest/guest to login.';
    }
  }
}
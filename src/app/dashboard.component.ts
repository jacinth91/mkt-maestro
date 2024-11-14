import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container" style="display: flex;">
      <!-- Sidebar -->
      <div class="sidebar">
        <h2 style="margin-bottom: 24px; font-size: 24px;">Dashboard</h2>
        
        <nav>
          <ul style="list-style: none;">
            <li style="margin-bottom: 16px;">
              <a href="#" style="color: white; text-decoration: none; display: flex; align-items: center; gap: 12px;">
                <span>📊</span> Overview
              </a>
            </li>
            <li style="margin-bottom: 16px;">
              <a href="#" style="color: white; text-decoration: none; display: flex; align-items: center; gap: 12px;">
                <span>📈</span> Analytics
              </a>
            </li>
            <li style="margin-bottom: 16px;">
              <a href="#" style="color: white; text-decoration: none; display: flex; align-items: center; gap: 12px;">
                <span>⚙️</span> Settings
              </a>
            </li>
            <li>
              <button 
                (click)="logout()" 
                class="btn-primary"
                style="background: transparent; border: 1px solid var(--primary);"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <h1 style="margin-bottom: 24px;">Welcome to Dashboard</h1>
        <p>You're logged in as a guest user. Explore the sidebar for navigation.</p>
      </div>
    </div>
  `
})
export class DashboardComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
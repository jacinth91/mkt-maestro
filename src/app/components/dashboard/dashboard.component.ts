import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FileUploadDialogComponent } from '../file-upload-dialog/file-upload-dialog.component';
import { ChatInterfaceComponent } from '../chat-interface/chat-interface.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FileUploadDialogComponent, ChatInterfaceComponent],
  template: `
    <div class="dashboard-container" style="display: flex; height: 100vh;">
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
            <li style="margin-bottom: 16px;display:flex;">
              <i class="fa fa-file" style="font-size:24px"></i>
              <button style="color: white; text-decoration: none; display: flex; align-items: center; gap: 12px; background-color:transparent;border:none;font-size:large;margin-left:20px;" 
                      type="button" 
                      label="Open Upload Dialog" 
                      (click)="showDialog()">
                upload
              </button>
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
      <div class="main-content" style="flex: 1; padding: 24px; display: flex; flex-direction: column;">
        <h1 style="margin-bottom: 24px;">Welcome to Dashboard</h1>
        <div style="flex: 1; margin-top: 20px;">
          <app-chat-interface></app-chat-interface>
        </div>
      </div>
      
      <app-file-upload-dialog [visible]="uploadDialogVisible"></app-file-upload-dialog>
    </div>
  `,
  styles: [`
    .main-content {
      background: #0a0a0a;
    }
  `]
})
export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router) {}
  uploadDialogVisible: boolean = false;

  showDialog() {
    this.uploadDialogVisible = true;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
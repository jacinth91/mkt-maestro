import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-chat-interface',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextareaModule, ButtonModule],
  template: `
    <div class="chat-container">
      <div class="chat-messages" #chatMessages>
        <div *ngFor="let message of messages" class="message" [ngClass]="message.type">
          <div class="message-content">
            <div class="avatar">
              {{ message.type === 'user' ? '👤' : '🤖' }}
            </div>
            <div class="text">{{ message.text }}</div>
          </div>
        </div>
      </div>

      <div class="suggestions" *ngIf="showSuggestions">
        <button *ngFor="let suggestion of suggestions" 
                class="suggestion-btn"
                (click)="selectSuggestion(suggestion)">
          {{ suggestion }}
        </button>
      </div>

      <div class="input-container">
        <textarea 
          pInputTextarea 
          [(ngModel)]="currentMessage" 
          
          placeholder="Type your message here..."
          [rows]="1"
          [autoResize]="true"
          class="chat-input">
        </textarea>
        <button pButton 
                class="send-button" 
                icon="pi pi-send"
                >
        </button>
      </div>
    </div>
  `,
  styles: [
    `
    .chat-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: #1a1a1a;
      border-radius: 10px;
      overflow: hidden;
    }

    .chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .message {
      display: flex;
      margin-bottom: 10px;
    }

    .message-content {
      display: flex;
      gap: 12px;
      max-width: 80%;
    }

    .avatar {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #2a2a2a;
      font-size: 20px;
    }

    .text {
      padding: 12px 16px;
      border-radius: 10px;
      background: #2a2a2a;
      color: #fff;
      line-height: 1.5;
    }

    .user .text {
      background: #0066ff;
    }

    .suggestions {
      padding: 10px 20px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .suggestion-btn {
      background: #2a2a2a;
      border: none;
      padding: 8px 16px;
      border-radius: 15px;
      color: #fff;
      cursor: pointer;
      transition: background 0.2s;
    }

    .suggestion-btn:hover {
      background: #3a3a3a;
    }

    .input-container {
      display: flex;
      gap: 10px;
      padding: 20px;
      background: #2a2a2a;
    }

    .chat-input {
      flex: 1;
      background: #1a1a1a !important;
      border: 1px solid #3a3a3a !important;
      border-radius: 10px !important;
      color: #fff !important;
      resize: none !important;
      padding: 12px !important;
    }

    .chat-input:focus {
      outline: none !important;
      border-color: #0066ff !important;
    }

    .send-button {
      background: #0066ff !important;
      border: none !important;
      width: 40px !important;
      height: 40px !important;
      border-radius: 10px !important;
    }

    :host ::ng-deep .p-inputtextarea {
      width: 100%;
    }
  `,
  ],
})
export class ChatInterfaceComponent {
  currentMessage = '';
  messages: Array<{ type: 'user' | 'bot'; text: string }> = [];
  showSuggestions = true;
  suggestions = [
    'How can I upload files?',
    'What features are available?',
    'Show me the dashboard overview',
    'Help me with settings',
  ];

  // sendMessage(event?: KeyboardEvent) {
  //   if (event) {
  //     event.preventDefault();
  //   }

  //   if (this.currentMessage.trim()) {
  //     this.messages.push({
  //       type: 'user',
  //       text: this.currentMessage
  //     });

  //     // Simulate bot response
  //     setTimeout(() => {
  //       this.messages.push({
  //         type: 'bot',
  //         text: `I received your message: "${this.currentMessage}". This is a demo response.`
  //       });
  //     }, 1000);

  //     this.currentMessage = '';
  //     this.showSuggestions = false;
  //   }
  // }

  selectSuggestion(suggestion: string) {
    this.currentMessage = suggestion;
    //this.sendMessage();
  }
}

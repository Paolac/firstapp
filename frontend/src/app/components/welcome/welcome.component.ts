import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-welcome',
  template: `
    <div class="welcome-container">
      <div class="card">
        <h2>Welcome to MentoringPM Project!</h2>
        <p>This is a full-stack application with Angular frontend and Node.js backend.</p>
        <div class="api-status" *ngIf="apiStatus">
          <h3>API Status:</h3>
          <p [ngClass]="{'connected': apiConnected, 'disconnected': !apiConnected}">
            {{ apiStatus }}
          </p>
        </div>
        <button class="btn" (click)="checkApiStatus()">Check API Connection</button>
      </div>
    </div>
  `,
  styles: [`
    .welcome-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 0;
    }
    h2 {
      margin-bottom: 1rem;
      color: #343a40;
    }
    .api-status {
      margin: 1.5rem 0;
      padding: 1rem;
      background-color: #f8f9fa;
      border-radius: 4px;
    }
    .connected {
      color: #28a745;
    }
    .disconnected {
      color: #dc3545;
    }
    button {
      margin-top: 1rem;
    }
  `]
})
export class WelcomeComponent implements OnInit {
  apiStatus: string = '';
  apiConnected: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // Optionally check API status on component initialization
  }

  checkApiStatus(): void {
    this.apiService.getApiStatus().subscribe({
      next: (response) => {
        this.apiStatus = 'Connected to API: ' + response.message;
        this.apiConnected = true;
      },
      error: (error) => {
        this.apiStatus = 'Failed to connect to API. Make sure the backend server is running.';
        this.apiConnected = false;
        console.error('API connection error:', error);
      }
    });
  }
}


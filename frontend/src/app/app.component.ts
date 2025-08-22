import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <header class="app-header">
        <div class="container">
          <h1>MentoringPM Project</h1>
        </div>
      </header>
      <main class="container">
        <router-outlet></router-outlet>
      </main>
      <footer class="app-footer">
        <div class="container">
          <p>&copy; 2025 MentoringPM Project</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .app-header {
      background-color: #343a40;
      color: white;
      padding: 1rem 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .app-footer {
      margin-top: auto;
      background-color: #f8f9fa;
      padding: 1rem 0;
      border-top: 1px solid #e9ecef;
      text-align: center;
    }
    main {
      padding: 2rem 0;
    }
  `]
})
export class AppComponent {
  title = 'MentoringPM Project';
}


import { renderApp } from './app.js';

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});

// Also execute immediately in case DOM is already ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  renderApp();
}

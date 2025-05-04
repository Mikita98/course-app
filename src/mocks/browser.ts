import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Initialize the Service Worker with the defined handlers
export const worker = setupWorker(...handlers);
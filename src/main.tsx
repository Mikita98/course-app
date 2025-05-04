import 'uno.css'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom';

const {worker} = await import('./mocks/browser')
await worker.start({
  serviceWorker: {url: '/mockServiceWorker.js'},
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)

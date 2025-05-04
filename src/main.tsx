import 'uno.css'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom';
import { worker } from './mocks/config'

async function initialize() {

  await worker.start({
    onUnhandledRequest: 'bypass',
    serviceWorker: {url: '/mockServiceWorker.js'}
  })

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </StrictMode>,
  )
}

initialize().catch(console.error)

import 'uno.css'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { worker } from './mocks/config'
import {HashRouter} from 'react-router-dom'

async function initialize() {

  await worker.start({
    onUnhandledRequest: 'bypass',
    serviceWorker: {url: '/course-app/mockServiceWorker.js'}
  })

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <HashRouter>
        <App/>
      </HashRouter>
    </StrictMode>,
  )
}

initialize().catch(console.error)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-6qc3vir4qh01nmgc.us.auth0.com"
    clientId='oEChrD7DjoxGUrbKMdvEv5ArzuvUEr90'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>,
)

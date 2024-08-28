import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRemote from './AppRemote.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRemote />
  </StrictMode>,
)

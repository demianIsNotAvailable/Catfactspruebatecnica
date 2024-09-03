import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Memo from '../../Memo.jsx'
import Input from '../../Input.jsx'
import RipPC from '../../RipPC.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RipPC />
  </StrictMode>,
)

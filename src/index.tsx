import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import './styles/global.css'
import 'swiper/css/bundle'

const rootElement = document.getElementById('root')

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
)

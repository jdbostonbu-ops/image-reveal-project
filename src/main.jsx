import React from 'react'
import ReactDOM from 'react-dom/client'
import ImageReveal from './ImageReveal'
import { BrowserRouter } from 'react-router-dom'; // 1. Add this import
import BottegaApp from './bottega';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageReveal />
  </React.StrictMode>
)

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            {/* 2. Wrap your app here */}
            <BrowserRouter>
                <BottegaApp />
            </BrowserRouter>
        </React.StrictMode>
    );
}
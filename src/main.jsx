import { createRoot } from 'react-dom/client'
import { createElement } from 'react'

// Simple working React component
function App() {
  return createElement('div', {
    style: { 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }
  }, 
    createElement('h1', {
      style: { color: '#2563eb', marginBottom: '20px' }
    }, '🛍️ React E-Commerce Storefront'),
    
    createElement('div', {
      style: { 
        background: '#d4edda', 
        padding: '20px', 
        borderRadius: '8px', 
        marginBottom: '20px',
        border: '1px solid #c3e6cb'
      }
    },
      createElement('h2', { style: { margin: '0 0 10px 0', color: '#155724' } }, '✅ SUCCESS: React is Working!'),
      createElement('p', { style: { margin: 0, color: '#155724' } }, 'Your React development environment is now properly configured.')
    ),
    
    createElement('button', {
      style: {
        background: '#007bff',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px'
      },
      onClick: () => alert('🎉 React is working perfectly!')
    }, 'Test React Functionality')
  )
}

// Mount the app
const container = document.getElementById('root')
const root = createRoot(container)
root.render(createElement(App))

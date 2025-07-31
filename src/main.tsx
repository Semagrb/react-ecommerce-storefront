import * as React from 'react'
import { createRoot } from 'react-dom/client'

// Simple React component using createElement (no JSX)
const App = () => {
  return React.createElement('div', {
    style: { 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }
  }, 
    React.createElement('h1', {
      style: { color: '#2563eb', marginBottom: '20px' }
    }, '🛍️ React E-Commerce Storefront'),
    
    React.createElement('div', {
      style: { 
        background: '#d4edda', 
        padding: '20px', 
        borderRadius: '8px', 
        marginBottom: '20px',
        border: '1px solid #c3e6cb'
      }
    },
      React.createElement('h2', { style: { margin: '0 0 10px 0', color: '#155724' } }, '✅ SUCCESS: React is Working!'),
      React.createElement('p', { style: { margin: 0, color: '#155724' } }, 'Your React development environment is now properly configured and running.')
    ),
    
    React.createElement('div', {
      style: { 
        background: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px', 
        marginBottom: '20px',
        border: '1px solid #dee2e6'
      }
    },
      React.createElement('h3', { style: { margin: '0 0 10px 0' } }, '🚀 Features Ready:'),
      React.createElement('ul', null,
        React.createElement('li', null, '✅ React 18 + TypeScript'),
        React.createElement('li', null, '✅ Vite Development Server'),
        React.createElement('li', null, '✅ Modern Build Setup'),
        React.createElement('li', null, '✅ Hot Module Replacement'),
        React.createElement('li', null, '✅ E-commerce Foundation')
      )
    ),
    
    React.createElement('button', {
      style: {
        background: '#007bff',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold'
      },
      onClick: () => {
        alert('🎉 Congratulations! React is working perfectly!\n\nNext steps:\n• Set up the full e-commerce components\n• Configure Firebase\n• Add your products\n• Deploy to production')
      }
    }, 'Test React Functionality')
  )
}

// Mount the app
const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(React.createElement(App))
} else {
  console.error('Root element not found!')
}

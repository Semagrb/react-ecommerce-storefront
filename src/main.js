// Pure JavaScript version - no JSX, no TypeScript
import { createRoot } from 'react-dom/client';
import { createElement as h } from 'react';

function App() {
  const handleClick = () => {
    alert('🎉 Congratulations! React is working perfectly!\n\nYour e-commerce storefront is ready for development!');
  };

  return h('div', {
    style: { 
      padding: '20px', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6'
    }
  }, 
    h('h1', {
      style: { 
        color: '#2563eb', 
        marginBottom: '20px',
        fontSize: '2.5rem',
        textAlign: 'center'
      }
    }, '🛍️ React E-Commerce Storefront'),
    
    h('div', {
      style: { 
        background: '#d4edda', 
        padding: '24px', 
        borderRadius: '12px', 
        marginBottom: '24px',
        border: '2px solid #c3e6cb',
        textAlign: 'center'
      }
    },
      h('h2', { 
        style: { 
          margin: '0 0 12px 0', 
          color: '#155724',
          fontSize: '1.5rem'
        } 
      }, '✅ SUCCESS: React is Working!'),
      h('p', { 
        style: { 
          margin: 0, 
          color: '#155724',
          fontSize: '1.1rem'
        } 
      }, 'Your development environment is properly configured and running on port 5500.')
    ),
    
    h('div', {
      style: { 
        background: '#f8f9fa', 
        padding: '24px', 
        borderRadius: '12px', 
        marginBottom: '24px',
        border: '1px solid #dee2e6'
      }
    },
      h('h3', { 
        style: { 
          margin: '0 0 16px 0',
          color: '#495057'
        } 
      }, '🚀 Technology Stack Ready:'),
      h('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px'
        }
      },
        h('div', { style: { padding: '8px', background: '#e9ecef', borderRadius: '6px' } }, '✅ React 18'),
        h('div', { style: { padding: '8px', background: '#e9ecef', borderRadius: '6px' } }, '✅ Vite Dev Server'),
        h('div', { style: { padding: '8px', background: '#e9ecef', borderRadius: '6px' } }, '✅ ES6 Modules'),
        h('div', { style: { padding: '8px', background: '#e9ecef', borderRadius: '6px' } }, '✅ Hot Reload'),
        h('div', { style: { padding: '8px', background: '#e9ecef', borderRadius: '6px' } }, '✅ Modern JavaScript'),
        h('div', { style: { padding: '8px', background: '#e9ecef', borderRadius: '6px' } }, '✅ Component System')
      )
    ),
    
    h('div', {
      style: { 
        background: '#fff3cd', 
        padding: '24px', 
        borderRadius: '12px', 
        marginBottom: '24px',
        border: '1px solid #ffeaa7'
      }
    },
      h('h3', { 
        style: { 
          margin: '0 0 16px 0',
          color: '#856404'
        } 
      }, '📋 Next Development Steps:'),
      h('ol', {
        style: { margin: 0, paddingLeft: '20px', color: '#856404' }
      },
        h('li', { style: { marginBottom: '8px' } }, 'Enable TypeScript and JSX syntax'),
        h('li', { style: { marginBottom: '8px' } }, 'Set up Tailwind CSS styling'),
        h('li', { style: { marginBottom: '8px' } }, 'Configure Firebase for backend'),
        h('li', { style: { marginBottom: '8px' } }, 'Build e-commerce components'),
        h('li', { style: { marginBottom: '8px' } }, 'Add product management'),
        h('li', { style: { marginBottom: '8px' } }, 'Integrate payment processing')
      )
    ),
    
    h('div', {
      style: { 
        textAlign: 'center',
        marginTop: '32px'
      }
    },
      h('button', {
        style: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '16px 32px',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          fontSize: '18px',
          fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s',
          ':hover': {
            transform: 'translateY(-2px)'
          }
        },
        onClick: handleClick,
        onMouseOver: (e) => {
          e.target.style.transform = 'translateY(-2px)';
        },
        onMouseOut: (e) => {
          e.target.style.transform = 'translateY(0)';
        }
      }, '🎉 Test React Functionality')
    )
  );
}

// Initialize the app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(h(App));
  console.log('✅ React app mounted successfully!');
} else {
  console.error('❌ Root container not found!');
}

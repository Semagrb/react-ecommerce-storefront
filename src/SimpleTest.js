function SimpleTest() {
  return React.createElement('div', {
    style: { padding: '20px', fontFamily: 'Arial, sans-serif' }
  }, 
    React.createElement('h1', {
      style: { color: '#2563eb', marginBottom: '20px' }
    }, '🛍️ React E-Commerce Storefront'),
    React.createElement('div', {
      style: { background: '#f3f4f6', padding: '20px', borderRadius: '8px' }
    },
      React.createElement('h2', null, '✅ React is Working!'),
      React.createElement('p', null, 'Your development environment is set up correctly.')
    ),
    React.createElement('button', {
      style: {
        background: '#2563eb',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '20px'
      },
      onClick: () => alert('React is working perfectly! 🎉')
    }, 'Test React Functionality')
  )
}

export default SimpleTest

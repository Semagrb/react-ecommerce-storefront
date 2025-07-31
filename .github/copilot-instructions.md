# Copilot Instructions for React E-Commerce Storefront

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a modern React e-commerce storefront built with TypeScript, Vite, and Tailwind CSS. The project follows modern React patterns and best practices.

## Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: Zustand for cart and auth state
- **Routing**: React Router v6
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Payments**: Stripe API integration
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier

## Code Style Guidelines
- Use TypeScript for all components and utilities
- Follow functional component pattern with hooks
- Use custom hooks for complex logic
- Implement proper error boundaries
- Use proper TypeScript interfaces for all data structures
- Follow atomic design principles for components
- Use meaningful variable and function names
- Implement proper loading and error states

## Component Structure
- **Atoms**: Basic UI elements (Button, Input, etc.)
- **Molecules**: Simple component combinations (SearchBar, ProductCard)
- **Organisms**: Complex components (Header, ProductGrid, CartSidebar)
- **Templates**: Layout components
- **Pages**: Route-level components

## State Management
- Use Zustand for global state (cart, auth, theme)
- Use React Query/TanStack Query for server state
- Keep component state local when possible
- Use context sparingly for theme and other cross-cutting concerns

## API Integration
- All API calls should have proper error handling
- Use TypeScript interfaces for all API responses
- Implement loading states for all async operations
- Use React Query for caching and synchronization

## Security Practices
- Validate all user inputs
- Sanitize data before display
- Use environment variables for sensitive config
- Implement proper authentication checks
- Follow OWASP guidelines for web security

## Performance Optimization
- Use React.lazy for code splitting
- Implement image optimization
- Use useMemo and useCallback appropriately
- Implement virtual scrolling for large lists
- Optimize bundle size with proper imports

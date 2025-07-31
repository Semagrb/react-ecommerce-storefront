import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { CartItem, Product, CartState } from '../types'

interface CartAction {
  type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'UPDATE_QUANTITY' | 'CLEAR_CART' | 'LOAD_CART'
  payload?: any
}

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      const { product, quantity = 1 } = action.payload
      const existingItem = state.find(item => item.id === product.id)
      
      if (existingItem) {
        return state.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      
      return [...state, { id: product.id, product, quantity }]

    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload)

    case 'UPDATE_QUANTITY':
      const { productId, quantity: newQuantity } = action.payload
      if (newQuantity <= 0) {
        return state.filter(item => item.id !== productId)
      }
      
      return state.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )

    case 'CLEAR_CART':
      return []

    case 'LOAD_CART':
      return action.payload || []

    default:
      return state
  }
}

const CartContext = createContext<CartState | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, dispatch] = useReducer(cartReducer, [])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        dispatch({ type: 'LOAD_CART', payload: parsedCart })
      } catch (error) {
        console.error('Error loading cart from localStorage:', error)
      }
    }
  }, [])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

  const addItem = (product: Product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } })
  }

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const value: CartState = {
    items,
    total,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

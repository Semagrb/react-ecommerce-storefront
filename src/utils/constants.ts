export const ROUTES = {
  HOME: '/',
  SHOP: '/shop',
  PRODUCT: '/product',
  CART: '/cart',
  CHECKOUT: '/checkout',
  AUTH: '/auth',
  ADMIN: '/admin',
  PROFILE: '/profile',
} as const

export const API_ENDPOINTS = {
  PRODUCTS: '/api/products',
  USERS: '/api/users',
  ORDERS: '/api/orders',
  AUTH: '/api/auth',
} as const

export const PRODUCT_CATEGORIES = [
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports & Outdoors',
  'Books',
  'Beauty & Personal Care',
  'Toys & Games',
  'Automotive',
] as const

export const ORDER_STATUSES = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const

export const PAYMENT_METHODS = {
  CREDIT_CARD: 'credit_card',
  PAYPAL: 'paypal',
  STRIPE: 'stripe',
  APPLE_PAY: 'apple_pay',
  GOOGLE_PAY: 'google_pay',
} as const

export const SORT_OPTIONS = [
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' },
  { value: 'price-asc', label: 'Price (Low to High)' },
  { value: 'price-desc', label: 'Price (High to Low)' },
  { value: 'rating-desc', label: 'Rating (High to Low)' },
  { value: 'newest', label: 'Newest First' },
] as const

export const ITEMS_PER_PAGE = 12
export const MAX_CART_QUANTITY = 10
export const MIN_PASSWORD_LENGTH = 6
export const MAX_PRODUCT_IMAGES = 5

export const CURRENCY = 'USD'
export const DEFAULT_COUNTRY = 'United States'

export const TOAST_MESSAGES = {
  ITEM_ADDED_TO_CART: 'Item added to cart successfully!',
  ITEM_REMOVED_FROM_CART: 'Item removed from cart',
  CART_CLEARED: 'Cart cleared',
  ORDER_PLACED: 'Order placed successfully!',
  SIGN_IN_SUCCESS: 'Welcome back!',
  SIGN_OUT_SUCCESS: 'Signed out successfully',
  ERROR_GENERIC: 'Something went wrong. Please try again.',
} as const

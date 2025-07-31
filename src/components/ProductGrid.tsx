import React from 'react'

export const HeroSection: React.FC = () => (
  <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 rounded-lg">
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to EcommStore</h1>
      <p className="text-xl mb-8">Discover amazing products at unbeatable prices</p>
    </div>
  </div>
)

export const FeaturedCategories: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {['Electronics', 'Clothing', 'Home & Garden', 'Sports'].map((category) => (
      <div key={category} className="bg-white p-6 rounded-lg shadow-sm border text-center">
        <h3 className="font-semibold">{category}</h3>
      </div>
    ))}
  </div>
)

export const ProductGrid: React.FC<{ featured?: boolean; limit?: number }> = ({ featured, limit }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {Array.from({ length: limit || 8 }).map((_, i) => (
      <div key={i} className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="bg-gray-200 h-48 rounded-md mb-4"></div>
        <h3 className="font-semibold mb-2">Sample Product {i + 1}</h3>
        <p className="text-gray-600 mb-2">Product description</p>
        <p className="text-lg font-bold text-primary-600">${(Math.random() * 100 + 10).toFixed(2)}</p>
      </div>
    ))}
  </div>
)

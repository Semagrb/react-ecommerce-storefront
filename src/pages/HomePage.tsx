import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { ProductGrid } from '../components/ProductGrid'
import { HeroSection } from '../components/HeroSection'
import { FeaturedCategories } from '../components/FeaturedCategories'

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Categories */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600">Discover our wide range of products</p>
        </div>
        <FeaturedCategories />
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600">Check out our most popular items</p>
        </div>
        <ProductGrid featured={true} limit={8} />
        <div className="text-center mt-8">
          <Link to="/shop">
            <Button size="lg">View All Products</Button>
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
        <p className="text-gray-600 mb-6">Subscribe to get notified about new products and exclusive offers</p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
          <Button className="rounded-l-none">Subscribe</Button>
        </div>
      </section>
    </div>
  )
}

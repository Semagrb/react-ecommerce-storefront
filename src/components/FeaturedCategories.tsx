import React from 'react'

export const FeaturedCategories: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {['Electronics', 'Clothing', 'Home & Garden', 'Sports'].map((category) => (
      <div key={category} className="bg-white p-6 rounded-lg shadow-sm border text-center">
        <h3 className="font-semibold">{category}</h3>
      </div>
    ))}
  </div>
)

import React, { useMemo } from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

// React.memo caches the component output and skips re-rendering if props haven't changed
const ProductList = React.memo(({ selectedCategory, onAddToCart }) => {
  // useMemo caches the filtered list — only recalculates when selectedCategory changes
  const filteredProducts = useMemo(() => {
    return selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  )
})

ProductList.displayName = 'ProductList'

export default ProductList

import React from 'react'
import styles from '../styles/ProductCard.module.css'

// React.memo caches ProductCard — it will only re-render if 'product' or 'onAddToCart' props change
const ProductCard = React.memo(({ product, onAddToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      <button
        data-testid={'product-' + product.id}
        onClick={() => onAddToCart(product)}
        className={styles.addButton}
      >
        Add to Cart
      </button>
    </div>
  )
})

ProductCard.displayName = 'ProductCard'

export default ProductCard

import React, { useState, useCallback, useMemo } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import darkModeStyles from './styles/DarkMode.module.css'

const App = () => {
  // State for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false)

  // State for cart management
  const [cart, setCart] = useState([])

  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  // useCallback caches these handlers so they are not recreated on every render
  // This prevents child components that receive them as props from re-rendering unnecessarily
  const handleToggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev)
  }, [])

  const handleAddToCart = useCallback((product) => {
    setCart((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev
      return [...prev, product]
    })
  }, [])

  const handleCategoryChange = useCallback((e) => {
    setSelectedCategory(e.target.value)
  }, [])

  // useMemo caches the cart item count so it is only recalculated when cart changes
  const cartCount = useMemo(() => cart.length, [cart])

  return (
    <div className={isDarkMode ? darkModeStyles.dark : darkModeStyles.light}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark Mode Toggle */}
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleToggleDarkMode} />

      {/* Category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      {/* Cart component */}
      <Cart cart={cart} cartCount={cartCount} />
    </div>
  )
}

export default App

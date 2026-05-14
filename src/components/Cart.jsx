import React, { useMemo } from 'react'

// React.memo caches Cart — it will only re-render when the cart prop changes
const Cart = React.memo(({ cart, cartCount }) => {
  // useMemo caches the rendered list items — only recalculates when cart changes
  const cartItems = useMemo(
    () =>
      cart.map((item) => (
        <li key={item.id}>{item.name} is in your cart.</li>
      )),
    [cart]
  )

  return (
    <div>
      <h2>Shopping Cart ({cartCount} item{cartCount !== 1 ? 's' : ''})</h2>
      <ul>{cartItems}</ul>
    </div>
  )
})

Cart.displayName = 'Cart'

export default Cart

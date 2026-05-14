import React from 'react'

// React.memo caches DarkModeToggle — it will only re-render when isDarkMode or onToggle props change
const DarkModeToggle = React.memo(({ isDarkMode, onToggle }) => {
  return (
    <button onClick={onToggle}>
      {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
})

DarkModeToggle.displayName = 'DarkModeToggle'

export default DarkModeToggle

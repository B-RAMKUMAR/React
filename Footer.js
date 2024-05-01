import React from 'react'

export const Footer = () => {
    const year=new Date()
  return (
    
    <footer>&copy {year.getFullYear()}</footer>  )
}

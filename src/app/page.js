import React from 'react'
import CardList from '@/components/cardList/CardList'
import Category from '@/components/category/Category'
import Menu from '@/components/menu/Menu'

export default function page() {
  return (
    <main id='main'>
      <div className="main__header">
        <h2>#main</h2>
        <Menu />
      </div>
      <div className='main__contents'>
        <Category />
        <CardList />
      </div>
    </main>
  )
}

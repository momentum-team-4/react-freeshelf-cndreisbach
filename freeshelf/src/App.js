import React from 'react'
import './App.css'
import books from './books.json'
import Book from './components/Book'

function App () {
  return (
    <div className='App'>
      {books.map(b => (
        <Book book={b} key={b.url} />
      ))}
    </div>
  )
}

export default App

import { useState } from 'react'
import Button from './Button'
const BookForm = (props) => {
  const [title, set_title] = useState('')
  const [author, set_author] = useState('')
  const handleSubmit =(event) => {
    
    event.preventDefault()
    console.log('submit')
    console.log(title)
    console.log(author)
    let newBook = {title: title, author: author, isbn: Math.random()}
    props.addBook(newBook)
  }
  return (
    <div>
      <h1>BookForm</h1>
      <form onSubmit={handleSubmit}>
        <p>title</p>
        <input 
        value={title}
        onChange={(e)=> set_title(e.target.value)}
        />
        <p>author</p>
        <input 
        value={author}
        onChange={(e)=> set_author(e.target.value)}

        />
        <Button>add</Button>
      </form>

    </div>

  );
}

export default BookForm
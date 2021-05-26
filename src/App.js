import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import BookForm from './BookForm';
import Button from './Button';

function App() {
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    console.log('useEffect called')
    getBooks()
  }, [])

  const getBooks = async ()=>{
    console.log('before faker call')
    let response = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5?delay=3')
    console.log('after faker call')
    console.log('response:',response)
    console.log('response.data:', response.data)
    console.log('response.data.data:', response.data.data)
    setBooks(response.data.data)
    setLoading(false)
  }

  const deleteBook = (isbn) => {
    console.log('deleteBook clicked isbn:', isbn)
    let newBooks = books.filter( book=>{
      return book.isbn !== isbn
    })
    setBooks(newBooks)

  }
  const renderBooks = () => {
    if(loading){
      return<p>Loading books please wait...</p>
    }
    return books.map( book => {
      return(
        <div key={book.isbn}>
          {book.title} by: {book.author} isbn: {book.isbn}
          <p>
          <Button text='delete'onClick={() => deleteBook(book.isbn)}></Button>
          <Button text='update'></Button>
          </p>
        </div>
      )
    })
  }
  const addBook = (book)=>{
    console.log(book)
    setBooks([book, ...books, book])
  }

  console.log('about to render to DOM')
  return (
    <div className="App">
      <Button text={showForm ? "hide form" : "show form"}
       onClick={()=> setShowForm(!showForm)}>
        
        </Button>
      {showForm && <BookForm  addBook={addBook} /> }
      <h1>Books</h1>
      {renderBooks()}
      
    </div>
  );
}


export default App;

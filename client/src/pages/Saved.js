import React,{ useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Book from "../components/Book";
import ViewBtn from "../components/ViewBtn";

function Saved(){
    const [books, setBooks] = useState([]);
    // Load all books and store them with setBooks
    useEffect(() => {
      loadBooks()
    }, [])

   // Loads all books and sets them to books
   function loadBooks() {
     API.getBooks()
      .then(res => {
        console.log(res);
        if (res){
          setBooks(res.data);
        }  
      } 
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
      console.log(id);
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  function viewBook(link) {
    window.open(link);
}

    return(
        <Container fluid>
            <Row>
                 <Jumbotron>
                    <h1>View your Saved Books</h1>
                </Jumbotron>  
                <Col size="md-12">
                    {books.length ? (
                      <List>
                       {books.map((book) => (
                        <ListItem key={book._id}>
                          <Book book={book} image={book.image}/>
                          <DeleteBtn onClick={() => deleteBook(book._id)} />
                          <ViewBtn onClick={() => viewBook(book.link)} />
                        </ListItem> ))}
                      </List>
                    ) : (
                         <h3>No Results to Display</h3>
                         )}
                </Col>
            </Row>
        </Container>        
    );
}

export default Saved;
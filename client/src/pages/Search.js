import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input,FormBtn } from "../components/Form";
import Book from "../components/Book";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";

function Search(){

   const [search, setSearch] = useState("");
   const [books, setBooks] = useState([])

   function handleInputChange(event) {
     const { name, value } = event.target;
     setSearch({...search, [name]: value});
     
   };

   function handleFormSubmit(event) {
    event.preventDefault();
    if (search) {
      console.log(search);  
      API.getBook(
        search
      )
      .then(res => {console.log(res.data.items);
                    setBooks(res.data.items);
                   
                   })  
      .catch(err => console.log(err));
    }
  };

  function viewBook(volumeInfo) {
      window.open(volumeInfo.infoLink);
  }

  function saveBook(volumeInfo){
      console.log(volumeInfo.authors);
     let data={
         title:volumeInfo.title,
         authors:volumeInfo.authors,
         description:volumeInfo.description,
         image:volumeInfo.imageLinks.thumbnail,
         link:volumeInfo.infoLink

     };
     console.log(data);
     API.saveBook(data).then(res=>{
         alert(`${res.data.title} by ${res.data.authors?res.data.authors.join(","):"undefined"} is saved to your collection!!!`)
     }).catch(err=>alert(err));
  }

   return(
    <Container fluid>
    <Row>
      <Jumbotron>
          <h1>Search for Books of Interest</h1>
      </Jumbotron>  
      <Col size="md-6">
        
        <form>
          <Input
            onChange={handleInputChange}
            name="search"
            placeholder="Title (required)"
          />
          <FormBtn
            disabled={!search}
            onClick={handleFormSubmit}
          >
            Search
          </FormBtn>
        </form>
       </Col> 

       <Col size="md-12">
            
            {books.length ? (
              <List>
                {books.map((book) => (
                  <ListItem key={book.volumeInfo.id}>
                    <Book book={book.volumeInfo} image={(book.volumeInfo.imageLinks)?book.volumeInfo.imageLinks.thumbnail:""}/>
                    <SaveBtn onClick={() => saveBook(book.volumeInfo)} />
                    <ViewBtn onClick={() => viewBook(book.volumeInfo)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
      </Row>
     </Container> 
   );
}
export default Search;
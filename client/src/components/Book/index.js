import React from "react";
import { Col, Row, Container } from "../Grid";

function Book({book,image}){
  return(
   <Container>
    
      <h2>{book.title}</h2>
      {(book.authors)?
      <h6><i>{book.authors.join(",")}</i></h6>
      :
      <h6><i>{book.authors}</i></h6>
      }
    
    <Row>
        <Col size="md-2">
         
           <img src={image}/>
            
        </Col>
        <Col size="md-10">
            <p>{book.description}</p>
        </Col>
    </Row>
    </Container>  

  )
}

export default Book;
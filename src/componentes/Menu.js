import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState, useRef } from 'react';

export default function Menu() {

    const [categoria, setCategoria] = useState([]);
    console.log(categoria)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
          .then(response => {
            if (!response.ok) {
              throw new Error('Erro na solicitação');
            }
            console.log(response)
            return response.json();
          })
          .then(data => {
            console.log(data)
            setCategoria(data);
            console.log(categoria)

          })
          .catch(error => {
            console.error('Erro:', error);
          });
      }, []);
      console.log(categoria)

  return (
    <>
      <Navbar fixed='top' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Loja</Navbar.Brand>
          <Nav className="me-auto">
    
          {categoria.map(category => ( <Nav.Link href="#home">{category}</Nav.Link> ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
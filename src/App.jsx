import React from 'react';
import { Aside } from './components/Aside';
import { Header } from "./components/Header"
import { Main } from './components/Main'
import { Container, globalStyles } from "./global"

export function App() {
  {globalStyles()}

  return (
    <>
      <Header />
      <Container>
        <Aside />
        <Main />
      </Container>
    </>  
    )
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { globalCss, styled } from '@stitches/react'
import { Menu } from './components'
import { Car, Home } from './pages'

const Container = styled('div', {
  background: '#eee',
  width: '100%',
  display: 'flex'
})

const MenuLeft = styled('nav', {
  minWidth: '200px',
  background: '#000',
  height: '100vh'
})

const Content = styled('div', {
  width: '80%'
})

const globalStyles = globalCss({
  body: {
    margin: 0
  },
});

function App() {

  globalStyles()

  const menuList = [
    {
      to: '/',
      name: 'Home'
    },
    {
      to: '/car',
      name: 'Carros'
    },
    {
      to: '/people',
      name: 'Pessoas',
      reload: true
    }
  ]

  const carList = [
    {
      cod: '100',
      name: 'Classic',
      ano: '2012',
      price: 'R$ 10000,00'
    },
    {
      cod: '101',
      name: 'Corsa',
      ano: '2011',
      price: 'R$ 15000,00'
    },
    {
      cod: '102',
      name: 'Versa',
      ano: '2022',
      price: 'R$ 60000,00'
    },
    {
      cod: '103',
      name: 'Honda Fit',
      ano: '2023',
      price: 'R$ 30000,00'
    },
    {
      cod: '104',
      name: 'Fiesta',
      ano: '2015',
      price: 'R$ 25000,00'
    },
  ]

  return (
    <Container>
      <MenuLeft>
        <Menu menuList={menuList} />
      </MenuLeft>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car" element={<Car carList={carList} />} />
        </Routes>
      </Content>
    </Container>
  )
}

export default App

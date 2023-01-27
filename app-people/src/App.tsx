import { Route, Routes } from 'react-router-dom'
import { globalCss, styled } from '@stitches/react'
import { Menu } from './components'
import { People, Home } from './pages'

const Container = styled('div', {
  background: '#eee',
  width: '100%',
})

const MenuHeader = styled('nav', {
  width: '100%',
  background: '#000',
  position: 'absolute',
  top: 0
})

const Content = styled('div', {
  width: '100%',
  height: '100vh'
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
      name: 'Carros',
      reload: true
    },
    {
      to: '/people',
      name: 'Pessoas'
    }
  ]

  const peopleList = [
    {
      cod: '1000',
      name: 'Moises',
      lastName: 'Souza',
      year: '10'
    },
    {
      cod: '1001',
      name: 'Ricardo',
      lastName: 'Afonso',
      year: '20'
    },
    {
      cod: '1002',
      name: 'Cesar',
      lastName: 'Cavalcante',
      year: '30'
    },
    {
      cod: '1003',
      name: 'Aline',
      lastName: 'Carvalho',
      year: '40'
    },
    {
      cod: '1004',
      name: 'Karol',
      lastName: 'Silva',
      year: '50'
    },
  ]

  return (
    <Container>
      <MenuHeader>
        <Menu menuList={menuList} />
      </MenuHeader>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People peopleList={peopleList} />} />
        </Routes>
      </Content>
    </Container>
  )
}

export default App

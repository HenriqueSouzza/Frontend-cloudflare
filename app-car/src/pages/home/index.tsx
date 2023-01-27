import React from 'react'
import { styled } from '@stitches/react'
import { Layout } from '../../components'

const Card = styled('div', {
  background: '#fff',
  width: '80%',
  margin: '0 auto',
  padding: '10px',
  textAlign: 'center',
})

const Text = styled('span', {
  fontFamily: 'sans-serif',
  fontSize: '20px'
})

export const Home = () => {
  return (
    <Layout>
      <Card>
        <Text>Seja bem-vindo a aplicação - controle de estoque de carros</Text>
      </Card>
      <br />
      <Card>
        <Text>Perceba! Se você chegou aqui, é porque o cloudflare renderizou o <strong>app de carros</strong></Text>
      </Card>
    </Layout>
  )
}
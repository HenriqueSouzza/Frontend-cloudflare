import React, { FC } from 'react'
import { styled } from '@stitches/react'
import { Card, Layout } from '../../components'

const Table = styled('table', {
  width: '100%',
  borderCollapse: "collapse",
  border: "1px solid #000",
  fontFamily: "Anek Telugu",
})

interface CarProps {
  carList: Array<CarListProps>
}

interface CarListProps {
  cod: string
  name: string
  ano: string
  price: string
}

export const Car: FC<CarProps> = ({ carList }) => {
  return (
    <Layout>
      <Card>
        <div>listagem de carros</div>
      </Card>
      <br />
      <Card>
        <Table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Ano</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {carList.map(car => (
              <tr key={car.cod}>
                <td>{car.cod}</td>
                <td>{car.name}</td>
                <td>{car.ano}</td>
                <td>{car.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Layout>
  )
}
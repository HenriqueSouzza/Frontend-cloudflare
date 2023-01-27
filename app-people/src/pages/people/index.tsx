import React, { FC } from 'react'
import { styled } from '@stitches/react'
import { Card, Layout } from '../../components'

const Table = styled('table', {
  width: '100%',
  borderCollapse: "collapse",
  border: "1px solid #000",
  fontFamily: "Anek Telugu",
})

interface PeopleProps {
  peopleList: Array<PeopleListProps>
}

interface PeopleListProps {
  cod: string
  name: string
  lastName: string
  year: string
}

export const People: FC<PeopleProps> = ({ peopleList }) => {
  return (
    <Layout>
      <br />
      <br />
      <br />
      <Card>
        <div>Pessoas cadastradas</div>
      </Card>
      <br />
      <Card>
        <Table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody>
            {peopleList.map((people) => (
              <tr key={people.cod}>
                <td>{people.cod}</td>
                <td>{people.name}</td>
                <td>{people.lastName}</td>
                <td>{people.year}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Layout>
  )
}
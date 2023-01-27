import React, { FC, ReactNode } from "react"
import { styled } from "@stitches/react"

const Container = styled('div', {
  background: '#fff',
  width: '80%',
  margin: '0 auto',
  padding: '10px',
  textAlign: 'center'
})

interface CardProps {
  children: ReactNode
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
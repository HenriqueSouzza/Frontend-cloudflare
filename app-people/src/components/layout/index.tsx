import React, { FC, ReactNode } from 'react'
import { styled } from '@stitches/react'

const Container = styled('div', {
  width: '90%',
})

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
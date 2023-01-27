import React from 'react'
import { styled } from '@stitches/react'
import { Link } from 'react-router-dom'

const MenuContainer = styled('ul', {
  listStyleType: 'none',
  margin: '10% auto',
  padding: 0,
})

const MenuItem = styled('li', {
  width: '100%',
  padding: '5% 0',
  margin: 0,
  display: 'block',

  '&:hover': {
    background: 'red'
  },

  'a': {
    color: '#fff',
    textDecoration: 'none',
    paddingLeft: '10px'
  }
})

interface MenuProps {
  menuList: Array<MenuListProps>
}

interface MenuListProps {
  to: string
  name: string
  reload?: boolean
}

export const Menu: React.FC<MenuProps> = ({ menuList }) => {
  return (
    <MenuContainer>
      {menuList.map((menu, i) => (
        <MenuItem key={i}>
          <Link to={menu.to} reloadDocument={menu.reload || false}>{menu.name}</Link>
        </MenuItem>
      ))}
    </MenuContainer>
  )
}
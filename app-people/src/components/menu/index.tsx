import React from 'react'
import { styled } from '@stitches/react'
import { Link } from 'react-router-dom'

const MenuContainer = styled('ul', {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  display: 'flex'
})

const MenuItem = styled('li', {
  width: '100%',
  margin: 0,
  padding: '5px',
  textAlign: 'center',

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
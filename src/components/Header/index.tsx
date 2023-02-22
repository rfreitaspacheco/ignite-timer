import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/Logo-ignite.svg'

import { Timer, Scroll } from 'phosphor-react'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="logo do ignite" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Historico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

import React from "react"
import { Link } from 'react-router-dom'
import { AsideContainer } from "./style"
import { MenuTitle, MenuAside } from "../Menus"

export function Aside() {
    return (
        <AsideContainer>
            <MenuTitle>Descubra</MenuTitle>
            <MenuAside>
                <Link to='/'><li>Recomendações</li></Link>
                <Link to='/'><li>Lançamentos</li></Link>
            </MenuAside>
            <MenuTitle>Categorias</MenuTitle>
            <MenuAside>
                <Link to='/'><li>Battle Royale</li></Link>
                <Link to='/'><li>Ação e Aventura</li></Link>
                <Link to='/'><li>Estratégia</li></Link>
                <Link to='/'><li>RPG</li></Link>
                <Link to='/'><li>Simulação</li></Link>
            </MenuAside>
        </AsideContainer>
    )
}
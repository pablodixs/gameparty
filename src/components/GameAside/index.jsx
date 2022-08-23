/* eslint-disable react/prop-types */
import {React } from "react"
import { Link } from "react-router-dom"
import { styled } from "../../stitches.config"
import { AsideContainer } from "./style"
import { GameTitle, MenuAside } from "../Menus"
import { MenuTitle } from "../Menus"

const Hr = styled('hr', {
    border: "1px solid rgba(175, 175, 175, 0.1)",
    margin: "1rem 0",
})

export function Aside(props) {
    return (
        <AsideContainer>
                <GameTitle>{props.game}</GameTitle>
                <MenuAside>
                    <Link to='/'><li>Visão Geral</li></Link>
                    <Link to='/'><li>Prêmios</li></Link>
                    <Link to='/'><li>Relacionados</li></Link>
                    <Hr />
                    <MenuTitle>Informações</MenuTitle>
                    
                </MenuAside>
                <li>Relacionados</li>
        </AsideContainer>
    )
}
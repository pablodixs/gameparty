import React from "react"
import { Link } from "react-router-dom"
import { HeaderContainer, TopHeader, Logo, Gradient, SearchBar, SearchContainer } from "./style"
import { Button } from '../../components/Button'
import { EnterIcon } from "@radix-ui/react-icons"

export function Header() {
    return (
        <HeaderContainer>
            <Gradient />
            <TopHeader>
                <Link to='/'><Logo /></Link>
                <SearchContainer>
                    <SearchBar placeholder="Buscar..." />
                </SearchContainer>
                <Link to='/login'><Button type='primary'>Entrar <EnterIcon /></Button></Link>
            </TopHeader>
        </HeaderContainer>
    )
}
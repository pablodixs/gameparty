import React from 'react';
import { globalStyles } from '../../global';
import { Header } from '../../components/Header';
import { Container } from "../../global"
import { Aside } from '../../components/Aside';

export function TheLastOfUs() {
    {globalStyles()}

    return (
        <Container>
            <Aside />
            <Header />
            <h1>The Last of Us: Parte I</h1>
        </Container>
    )
}
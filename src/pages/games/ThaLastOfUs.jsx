import React from 'react';
// import { Link } from 'react-router-dom';
import { globalStyles } from '../../global';
import { Header } from '../../components/Header';
import { Container } from "../../global"
import { Aside } from '../../components/GameAside';

export function TheLastOfUs() {
    {globalStyles()}

    return (
        <Container>
            <Header />
            <Aside game='The Last Of Us: Part I' />
        </Container>
    )
}
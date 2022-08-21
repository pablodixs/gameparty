import React from "react";
import { AltMain, globalStyles } from "../global";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { HomeIcon } from "@radix-ui/react-icons";
import { Container } from "../global";
import { Aside } from "../components/Aside";

export function Error404() {
    {globalStyles()}

    return (
        <>
            <Header />
            <Container>
                <Aside />
                <AltMain>
                    <h1>Nada encontrado... 🫤</h1>
                    <Link to='/'><Button type='secondary'><HomeIcon/> Voltar à página inicial </Button></Link>
                </AltMain>
            </Container>
        </>
    )
}
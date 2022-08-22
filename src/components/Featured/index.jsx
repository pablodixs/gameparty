import React from "react"
import { Link } from "react-router-dom"
import { FeatContainer, FeatImage, FeatLogo } from "./style"

export function Featured() {
    return(
        <Link to='games/thelastofus'>
            <FeatContainer>
                <FeatImage>
                    <FeatLogo src='https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-logo-01-en-18may22?$1600px--t$' />
                </FeatImage>
                <h1>Retorne ao aclamado jogo que deu início a tudo</h1>
                <p>Resista e sobreviva. Reviva o aclamado jogo que deu início a tudo, totalmente recriado para o console PlayStation®5.</p>
            </FeatContainer>
        </Link>
    )
}
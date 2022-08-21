/* eslint-disable react/prop-types */
import React from "react"
import { styled } from "../../stitches.config"

export const MenuTitle = styled('h3', {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.4)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
})

const MenuList = styled(
    'ul', {
    listStyle: 'none',
    margin: '.5rem 0 1rem 0',

    '& li': {
        padding: '.5rem 0',
        transition: 'all ease 300ms',
        color: 'rgba(255, 255, 255, 0.7)',
    },

    '& li:hover': {
        transform: 'translateX(5%)',
        color: 'rgba(255, 255, 255, 1)',
    },
})

export function MenuAside(props) {
    return (
        <MenuList>
            {props.children}
        </MenuList>
    )
}
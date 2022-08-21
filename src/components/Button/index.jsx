/* eslint-disable react/prop-types */
import React from 'react'
import { PrimaryButton } from './style'

export function Button(props) {
    return (
        <PrimaryButton type={props.type}>
            {props.children}
        </PrimaryButton>
    )
}
import { styled } from '../../stitches.config'

const TopHeader = styled('header', {
    backgroundColor: 'black',
    color: 'white',
})

export function Header() {
    return (
        <TopHeader>
            <div className='container'>
                <h1>Teste</h1>
            </div>
        </TopHeader>
    )
}   
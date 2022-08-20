import { TopHeader, Logo } from "./style"

export function Header() {
    return (
        <TopHeader>
            <div className='container'>
                <header>
                    <Logo />
                </header>
            </div>
        </TopHeader>
    )
}
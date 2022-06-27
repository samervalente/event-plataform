import { Logo } from "./Logo";

export function Header(){
    return (
        <header className="w-full flex justify-center align-center py-5 bg-gray-700 border-b border-gray-600 ">
            <Logo />
        </header>
    )
}
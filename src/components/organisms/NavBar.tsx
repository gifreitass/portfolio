import Title from "../atoms/Title"
import NavItems from "../molecules/NavItems"

const NavBar = () => {
    return (
        <nav className="flex justify-between">
            <Title size="text-2xl">gifreitass</Title>
            <NavItems />
        </nav>
    )
}

export default NavBar
import Title from "../atoms/Title"
import NavItems from "../molecules/NavItems"

const NavBar = () => {
    return (
        <nav className="text-white mx-48 pt-8 relative flex justify-between">
            <Title size="text-2xl">gi freitas</Title>
            <NavItems />
        </nav>
    )
}

export default NavBar
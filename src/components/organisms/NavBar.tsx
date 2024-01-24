import Title from "../atoms/Title"
import NavItems from "../molecules/NavItems"

const NavBar = () => {
    return (
        <nav className="text-white mx-48 pt-12 flex justify-between">
            <NavItems />
        </nav>
    )
}

export default NavBar
import Title from "../atoms/Title"
import NavItems from "../molecules/NavItems"

const NavBar = () => {
    return (
        <nav className="text-white mx-12 sm:mx-20 md:mx-28 lg:mx-48 pt-16 flex justify-between">
            <NavItems />
        </nav>
    )
}

export default NavBar
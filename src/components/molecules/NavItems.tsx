import Logo from "../atoms/Logo"

const NavItems = () => {
    return (
        <div className="flex gap-6">
            <Logo link="https://github.com/gifreitass" src="/images/github.png" description="github icon" />
            <Logo link="https://www.linkedin.com/in/gifreitasss/" src="/images/linkedin.png" description="linkedin icon" />
            <Logo link="mailto:giovannadefreitasaraujo@hotmail.com" src="/images/email.png" description="email icon" />
        </div>
    )
}

export default NavItems
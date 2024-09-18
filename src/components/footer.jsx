import Logo from "../assets/LOGO1.png"

export default function Footer() {
    return(
        <footer className="footer bg-neutral text-neutral-content items-center p-4 mt-12">
        <aside className="grid-flow-col items-center">
            <img src={Logo} alt="Logo" className="size-12" />
            <p>Reysil M. Clarion</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a href="https://www.facebook.com/reysil.clarion.1" target="_blank">
                <span className="iconify text-3xl" data-icon="akar-icons:facebook-fill" data-inline="false"></span>
            </a>
            <a href="https://www.linkedin.com/in/reysilclarion/" target="_blank">
                <span className="iconify text-3xl" data-icon="akar-icons:linkedin-fill" data-inline="false"></span>
            </a>
            <a href="https://github.com/RCLQD" target="_blank">
                <span className="iconify text-3xl" data-icon="akar-icons:github-fill" data-inline="false"></span>
            </a>
        </nav>
        </footer>
    )
}
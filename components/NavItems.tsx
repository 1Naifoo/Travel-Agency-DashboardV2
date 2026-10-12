import { Link } from "react-router";


const NavItems = () => {
    return (
        <section className="nav-items">
            <Link to="/" className="link-logo">
                <img
                    src="/assets/icons/logo.svg"
                    alt="Logo"
                    className="w-[30px] h-[30px]"
                />
                <h1>Tourpisto</h1>
            </Link>
        </section>
    );
};

export default NavItems; 
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css"; // Import the CSS file

export default function Header() {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            if (window.scrollY > 50) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header>
            <Navbar expand="lg" className="">
                <Container className="justify-content-between">
                    <Navbar.Brand href="#home">
                        <span
                            style={{
                                color: "#FF0000",
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                            }}
                        >
                            Di
                        </span>
                        <span
                            style={{
                                color: "#00ff00",
                                fontWeight: "bold",
                                fontSize: "1.5rem",
                            }}
                        >
                            Noba
                        </span>
                        <span
                            style={{
                                color: "#0080ff",
                                fontWeight: "bold",
                                fontSize: "1rem",
                            }}
                        >
                            By
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        style={{ flexGrow: 0 }}
                    >
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="nav-link">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#link" className="nav-link">
                                Link
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

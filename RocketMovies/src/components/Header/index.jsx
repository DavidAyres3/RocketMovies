import { Container, Profile } from "./styles"
import { Input } from "../Input"

import { Link } from "react-router-dom"

export function Header() {
    return (
        <Container>
            <Link to="/">
            RocketMovies
            </Link>
            <Input placeholder="Pesquisar pelo título..." />
            <Profile>
                <div>
                    <Link to="/profile">David Ayres</Link>
                    <Link to="/register">Sair</Link>
                </div>
                <img
                    src="https://github.com/davidayres3.png"
                    alt="Foto do usuário"
                />
            </Profile>
        </Container>
    )
}
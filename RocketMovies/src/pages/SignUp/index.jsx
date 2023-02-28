import { FiUser, FiLock, FiMail } from 'react-icons/fi'
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Return } from "../../components/Return";

import { Link } from "react-router-dom";

export function SignUp(){
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    requiredMessage="Você deve digitar um nome."
                    />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    requiredMessage="Informe seu e-mail"
                    />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    requiredMessage="Digite sua senha."
                    />
                <Button title="Entrar"/>
                <Link to="/">
                <Return title="Voltar para login"></Return>
                </Link>

            </Form>
                    <Background/>
        </Container>
    )
}
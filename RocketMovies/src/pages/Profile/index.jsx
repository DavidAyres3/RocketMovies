import { Container, Form, Avatar } from './styles'
import { Return } from "../../components/Return"
import { Input } from "../../components/Input"
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

import { FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                <Return title="Voltar" />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img
                        src="https://github.com/davidayres3.png"
                        alt="User photo" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file"
                        />

                    </label>
                </Avatar>
                <Input 
                    placeholder="Nome"
                    icon={FiUser}
                    type="text" />

                <Input 
                    placeholder="E-mail"
                    icon={FiMail}
                    type="text" />

                <Input 
                    placeholder="Senha atual"
                    icon={FiLock}
                    type="password" />

                <Input 
                    placeholder="Nova senha"
                    icon={FiLock}
                    type="password" />

                <Button title="Salvar" />
            </Form>

        </Container>
    )
}
import { Container } from './styles'

export function Button({ icon: Icon, title }) { //para poder utilizar um título na propriedade, desestruturamos na função o "titulo" ou qualquer outra
    // propriedade do mesmo, e passamos dentro da tag, conforme está acontecendo nesta função.
    return (
        <Container type="button">
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )
}
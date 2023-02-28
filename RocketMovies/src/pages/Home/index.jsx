import { AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";

import { Container, Content, NewMovie } from './styles'
import { Header } from '../../components/Header'
import { Rate } from '../../components/Rate'
import { Tag } from "../../components/Tag";

import { Link } from "react-router-dom";
export function Home() {
    return (
        <Container>
            <Header />
            <div className="add">
                <h1>Meus Filmes</h1>
                <NewMovie to="/new"> 
                    <AiOutlinePlus/>
                    Adicionar Filme
                </NewMovie>
            </div>
            <Content>
                <Link to="/MoviesPreview/:1">
                <h1>
                    Exemplo
                </h1>
                </Link>
                    <Rate/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint earum, voluptatum nulla magnam delectus
                    voluptates accusantium porro iste nam perspiciatis doloremque aliquid ab amet, animi eaque ducimus adipisci eum corrupti?
                </p>
                <div className="tags">
                    <Tag title="Ação" />
                    <Tag title="Aventura" />
                    <Tag title="Magia" />
                </div>
            </Content>
        </Container>
    )
}